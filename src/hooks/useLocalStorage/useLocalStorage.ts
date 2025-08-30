import { useState, useEffect } from "react";

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : initialValue;
    } catch (error) {
      console.error("Error leyendo localStorage", error);
      return initialValue;
    }
  });

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      localStorage.setItem(key, JSON.stringify(valueToStore));

      // 🔹 Notificar a otras instancias en la misma pestaña
      window.dispatchEvent(
        new CustomEvent("localstorage-update", {
          detail: { key, value: valueToStore },
        })
      );
    } catch (error) {
      console.error("Error guardando en localStorage", error);
    }
  };

  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === key && event.newValue) {
        setStoredValue(JSON.parse(event.newValue));
      }
    };

    const handleCustomEvent = (event: Event) => {
      const custom = event as CustomEvent;
      if (custom.detail.key === key) {
        setStoredValue(custom.detail.value);
      }
    };

    // Escucha cambios de otras pestañas
    window.addEventListener("storage", handleStorageChange);
    // Escucha cambios en la misma pestaña
    window.addEventListener("localstorage-update", handleCustomEvent);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("localstorage-update", handleCustomEvent);
    };
  }, [key]);

  return [storedValue, setValue] as const;
}
