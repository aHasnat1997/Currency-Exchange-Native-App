import { useState } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { CurrencyPicker } from "@/components/currency-picker";
import { CURRENCIES, Currency } from "@/constants/currencies";
import { Colors, Spacing } from "@/constants/theme";
import { useExchangeRate } from "@/hooks/use-exchange-rate";

const FEE = 8.4;

export default function HomeScreen() {
  const [amount, setAmount] = useState("0");
  const [from, setFrom] = useState<Currency>(CURRENCIES[0]); // USD
  const [to, setTo] = useState<Currency>(CURRENCIES[1]); // EUR
  const [picker, setPicker] = useState<"from" | "to" | null>(null);

  const { rate, loading, error } = useExchangeRate(from.code, to.code);

  const numericAmount = parseFloat(amount) || 0;
  const converted = rate
    ? (numericAmount * rate).toLocaleString(undefined, {
        maximumFractionDigits: 2,
      })
    : "—";

  function handleSwap() {
    setFrom(to);
    setTo(from);
  }

  function handleSelect(currency: Currency) {
    if (picker === "from") setFrom(currency);
    else setTo(currency);
  }

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.card}>
        <Text style={styles.title}>Convert your currency</Text>

        {/* Amount Input */}
        <View style={styles.amountRow}>
          <Text style={styles.symbol}>{from.symbol}</Text>
          <TextInput
            style={styles.amountInput}
            value={amount}
            onChangeText={setAmount}
            keyboardType="numeric"
            autoFocus
          />
        </View>

        {/* Currency Rows */}
        <View style={styles.box}>
          {/* From */}
          <TouchableOpacity
            style={styles.row}
            onPress={() => setPicker("from")}
          >
            <Text style={styles.flag}>{from.flag}</Text>
            <Text style={styles.code}>{from.code}</Text>
            <Text style={styles.rowAmount}>
              -{from.symbol}
              {numericAmount.toLocaleString()}
            </Text>
          </TouchableOpacity>

          {/* Swap */}
          <TouchableOpacity style={styles.swapBtn} onPress={handleSwap}>
            <Text style={styles.swapIcon}>⇅</Text>
          </TouchableOpacity>

          <View style={styles.divider} />

          {/* To */}
          <TouchableOpacity style={styles.row} onPress={() => setPicker("to")}>
            <Text style={styles.flag}>{to.flag}</Text>
            <Text style={styles.code}>{to.code}</Text>
            {loading ? (
              <ActivityIndicator size="small" color={Colors.blue} />
            ) : (
              <Text style={styles.rowAmount}>
                +{to.symbol}
                {converted}
              </Text>
            )}
          </TouchableOpacity>

          {/* Fee & Error */}
          {error ? (
            <Text style={styles.error}>{error}</Text>
          ) : (
            <View style={styles.feeRow}>
              <Text style={styles.muted}>Estimated fee</Text>
              <Text style={styles.muted}>${FEE}</Text>
            </View>
          )}
        </View>

        {/* Convert Button */}
        <TouchableOpacity style={styles.convertBtn}>
          <Text style={styles.convertText}>Convert</Text>
        </TouchableOpacity>

        <Text style={styles.secure}>
          🔒 Highly secured and encrypted by Neo Bank
        </Text>
      </View>

      {/* Currency Picker Modal */}
      <CurrencyPicker
        visible={picker !== null}
        onSelect={handleSelect}
        onClose={() => setPicker(null)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  card: {
    flex: 1,
    margin: Spacing.md,
    backgroundColor: Colors.card,
    borderRadius: 24,
    padding: Spacing.lg,
    gap: Spacing.lg,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: Colors.text,
  },

  // Amount
  amountRow: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  symbol: {
    fontSize: 40,
    fontWeight: "300",
    color: Colors.text,
  },
  amountInput: {
    fontSize: 52,
    fontWeight: "300",
    color: Colors.text,
    borderBottomWidth: 2,
    borderBottomColor: Colors.blue,
    minWidth: 100,
  },

  // Currency Box
  box: {
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 16,
    padding: Spacing.md,
    gap: Spacing.sm,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  flag: { fontSize: 24 },
  code: {
    flex: 1,
    fontSize: 16,
    fontWeight: "600",
    color: Colors.text,
  },
  rowAmount: {
    fontSize: 15,
    color: Colors.textMuted,
  },
  divider: {
    height: 1,
    backgroundColor: Colors.border,
  },
  swapBtn: {
    alignSelf: "center",
    backgroundColor: Colors.border,
    borderRadius: 20,
    width: 36,
    height: 36,
    alignItems: "center",
    justifyContent: "center",
  },
  swapIcon: {
    fontSize: 18,
    color: Colors.text,
  },
  feeRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 4,
  },
  muted: {
    fontSize: 13,
    color: Colors.textMuted,
  },
  error: {
    fontSize: 13,
    color: "red",
    textAlign: "center",
  },

  // Bottom
  convertBtn: {
    backgroundColor: Colors.blue,
    borderRadius: 14,
    paddingVertical: 16,
    alignItems: "center",
  },
  convertText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "600",
  },
  secure: {
    textAlign: "center",
    fontSize: 12,
    color: Colors.textMuted,
  },
});
