import { FlatList, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { Colors } from '@/constants/theme';
import { CURRENCIES, Currency } from '@/constants/currencies';

type Props = {
  visible: boolean;
  onSelect: (currency: Currency) => void;
  onClose: () => void;
};

export function CurrencyPicker({ visible, onSelect, onClose }: Props) {
  return (
    <Modal visible={visible} animationType="slide" onRequestClose={onClose}>
      <View style={styles.container}>
        <Text style={styles.title}>Select Currency</Text>
        <FlatList
          data={CURRENCIES}
          keyExtractor={(item) => item.code}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.item} onPress={() => { onSelect(item); onClose(); }}>
              <Text style={styles.flag}>{item.flag}</Text>
              <Text style={styles.code}>{item.code}</Text>
              <Text style={styles.name}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.card,
    paddingTop: 60,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: 16,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
    gap: 12,
  },
  flag: { fontSize: 24 },
  code: { fontSize: 16, fontWeight: '600', color: Colors.text, width: 48 },
  name: { fontSize: 14, color: Colors.textMuted },
});
