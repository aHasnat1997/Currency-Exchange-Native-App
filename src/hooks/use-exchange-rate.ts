import { useEffect, useState } from 'react';

type Result = {
  rate: number | null;
  loading: boolean;
  error: string | null;
};

export function useExchangeRate(from: string, to: string): Result {
  const [rate, setRate] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (from === to) {
      setRate(1);
      return;
    }

    setLoading(true);
    setError(null);

    fetch(`https://api.frankfurter.app/latest?from=${from}&to=${to}`)
      .then((res) => res.json())
      .then((data) => setRate(data.rates[to]))
      .catch(() => setError('Failed to fetch rate'))
      .finally(() => setLoading(false));
  }, [from, to]);

  return { rate, loading, error };
}
