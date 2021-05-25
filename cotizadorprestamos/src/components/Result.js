import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Result({
  total,
  capital,
  interest,
  months,
  errorMessage,
}) {
  return (
    <View style={styles.content}>
      {total && (
        <View style={styles.boxResult}>
          <Text style={styles.title}>Resumen</Text>

          <DataResult title="Cantidad solicitada:" result={`USD $${capital}`} />
          <DataResult title="Interes:" result={`${interest}%`} />
          <DataResult title="Plazos:" result={`${months} Meses`} />
          <DataResult
            title="Pago mensual:"
            result={`USD $${total.monthlyFee}`}
          />
          <DataResult
            title="Pago total:"
            result={`USD $${total.totalPayable}`}
          />
        </View>
      )}
      <View>
        <Text style={styles.error}>{errorMessage}</Text>
      </View>
    </View>
  );
}

function DataResult({title, result}) {
  return (
    <View style={styles.value}>
      <Text>{title}</Text>
      <Text>{result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    marginHorizontal: 40,
  },
  boxResult: {
    padding: 30,
  },
  title: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 30,
  },
  value: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  error: {
    marginTop: 30,
    textAlign: 'center',
    color: '#f00',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
