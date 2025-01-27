import React, { useState, useEffect } from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    padding: 20,
    
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  header: {
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  text: {
    fontSize: 12,
    marginBottom: 5,
  },
});

const now = new Date();
const DateObject = {
  year: now.getFullYear(),
  month: now.getMonth() + 1, // Adding 1 to get the correct month (as it's zero-based)
  day: now.getDate(),
  hour: now.getHours(),
  minute: now.getMinutes(),
  second: now.getSeconds()
};

// Create PDF component
const OrderInvoice = ({ order}) => {
  
  const [orderId, setOrderId] = useState();
  const [date,setDate] =useState();
  const [time,setTime] =useState();

  useEffect(() => {
    const newOrderId = Math.floor(Math.random() * 10000000000);
    setOrderId(newOrderId);
    setDate(` ${DateObject.day}/${DateObject.month}/${DateObject.year}`);
    setTime(`Time: ${DateObject.hour}:${DateObject.minute}:${DateObject.second}`);
  }, []);

  
  return (
    <Document style={styles.document}>
      <Page size="A4"  orientation="landscape" style={styles.page}>
        <View style={styles.section}>
          <View style={styles.header}>
            <Text style={styles.title}>Order Invoice</Text>
            <Text style={styles.subtitle}>Order Details</Text>
          </View>
          <Text style={styles.text}>Order Id: {orderId}</Text>
          <Text style={styles.text}>Title: {order.title}</Text>
          <Text style={styles.text}>Price: Rs {order.price}/-</Text>
          <Text style={styles.text}>Category: {order.category}</Text>
          <Text style={styles.text}>Order Date: {date}</Text>
          <Text style={styles.text}>Order Time: {time}</Text>
          {/* Add more order details as needed */}
        </View>
      </Page>
    </Document>
  );
};

export default OrderInvoice;
