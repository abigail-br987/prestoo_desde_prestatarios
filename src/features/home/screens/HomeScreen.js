import React from "react";
import { Text } from "react-native-paper";
import { Provider as PaperProvider, useTheme } from "react-native-paper";
import { View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { TouchableOpacity } from "react-native";
import { Image } from "react-native";

const profiles = [
  { 
    id: '1', 
    name: 'Luis Pérez', 
    age: 32, 
    status: 'Ingeniero de Sistemas', 
    interestRate: '5%', 
    repaymentTime: '12 meses', 
    requestedAmount: 'S/10,000', 
    loanReasonTags: ['Negocio', 'Expansión'], 
    loanExplanation: 'Ampliar mi empresa de tecnología.', 
    repaymentJustification: 'Ingresos de nuevos contratos.', 
    score: 85, 
    loanHistory: ['Préstamo 1: Pagado', 'Préstamo 2: Pagado', 'Préstamo 3: Pendiente'], 
    shortDescription: 'Apasionado por la innovación y la tecnología.',
    profileImage: 'https://randomuser.me/api/portraits/men/1.jpg'
  },
  { 
    id: '2', 
    name: 'María López', 
    age: 27, 
    status: 'Médica General', 
    interestRate: '6%', 
    repaymentTime: '24 meses', 
    requestedAmount: 'S/15,000', 
    loanReasonTags: ['Educación', 'Especialización'], 
    loanExplanation: 'Curso de especialización en pediatría.', 
    repaymentJustification: 'Mejor salario tras especialización.', 
    score: 90, 
    loanHistory: ['Préstamo 1: Pagado', 'Préstamo 2: Pagado', 'Préstamo 3: Pagado'], 
    shortDescription: 'Dedicada a mejorar la salud de los niños.',
    profileImage: 'https://randomuser.me/api/portraits/women/2.jpg'
  },
  { 
    id: '3', 
    name: 'Carlos Ramírez', 
    age: 40, 
    status: 'Maestro de Primaria', 
    interestRate: '4.5%', 
    repaymentTime: '18 meses', 
    requestedAmount: 'S/8,000', 
    loanReasonTags: ['Hogar'], 
    loanExplanation: 'Renovación de vivienda.', 
    repaymentJustification: 'Trabajo estable y ahorros.', 
    score: 80, 
    loanHistory: ['Préstamo 1: Pagado', 'Préstamo 2: Pendiente', 'Préstamo 3: Pendiente'], 
    shortDescription: 'Comprometido con la educación de los niños.',
    profileImage: 'https://randomuser.me/api/portraits/men/3.jpg'
  },
  { 
    id: '4', 
    name: 'Ana Torres', 
    age: 35, 
    status: 'Arquitecta', 
    interestRate: '5.2%', 
    repaymentTime: '36 meses', 
    requestedAmount: 'S/20,000', 
    loanReasonTags: ['Negocio', 'Diseño'], 
    loanExplanation: 'Abrir un estudio de diseño arquitectónico.', 
    repaymentJustification: 'Proyectos en cartera.', 
    score: 88, 
    loanHistory: ['Préstamo 1: Pagado'], 
    shortDescription: 'Apasionada por la creatividad y la arquitectura.',
    profileImage: 'https://randomuser.me/api/portraits/women/4.jpg'
  },
  { 
    id: '5', 
    name: 'Pedro Castillo', 
    age: 45, 
    status: 'Empresario', 
    interestRate: '7%', 
    repaymentTime: '48 meses', 
    requestedAmount: 'S/50,000', 
    loanReasonTags: ['Expansión'], 
    loanExplanation: 'Abrir una nueva sucursal.', 
    repaymentJustification: 'Ingresos de sucursal principal.', 
    score: 92, 
    loanHistory: ['Préstamo 1: Pagado', 'Préstamo 2: Pagado'], 
    shortDescription: 'Emprendedor con visiones de crecimiento.',
    profileImage: 'https://randomuser.me/api/portraits/men/5.jpg'
  },
  { 
    id: '6', 
    name: 'Sofía Mendoza', 
    age: 30, 
    status: 'Diseñadora Gráfica', 
    interestRate: '5.5%', 
    repaymentTime: '24 meses', 
    requestedAmount: 'S/12,000', 
    loanReasonTags: ['Negocio', 'Equipamiento'], 
    loanExplanation: 'Compra de equipos de diseño.', 
    repaymentJustification: 'Clientes asegurados.', 
    score: 87, 
    loanHistory: ['Préstamo 1: Pagado'], 
    shortDescription: 'Creatividad y arte en cada proyecto.',
    profileImage: 'https://randomuser.me/api/portraits/women/6.jpg'
  },
  { 
    id: '7', 
    name: 'Ricardo Gómez', 
    age: 50, 
    status: 'Contador Público', 
    interestRate: '4.8%', 
    repaymentTime: '30 meses', 
    requestedAmount: 'S/18,000', 
    loanReasonTags: ['Inversión'], 
    loanExplanation: 'Compra de software contable.', 
    repaymentJustification: 'Aumento de clientes.', 
    score: 89, 
    loanHistory: ['Préstamo 1: Pagado', 'Préstamo 2: Pagado'], 
    shortDescription: 'Precisión y eficiencia financiera.',
    profileImage: 'https://randomuser.me/api/portraits/men/7.jpg'
  },
  {id: '8', 
    name: 'Luis Pérez', 
    age: 32, 
    status: 'Ingeniero de Sistemas', 
    interestRate: '5%', 
    repaymentTime: '12 meses', 
    requestedAmount: 'S/10,000', 
    loanReasonTags: ['Negocio', 'Expansión'], 
    loanExplanation: 'Ampliar mi empresa de tecnología.', 
    repaymentJustification: 'Ingresos de nuevos contratos.', 
    score: 85, 
    loanHistory: ['Préstamo 1: Pagado', 'Préstamo 2: Pagado', 'Préstamo 3: Pendiente'], 
    shortDescription: 'Apasionado por la innovación y la tecnología.',
    profileImage: 'https://randomuser.me/api/portraits/men/1.jpg'
  },
  { 
    id: '9', 
    name: 'María López', 
    age: 27, 
    status: 'Médica General', 
    interestRate: '6%', 
    repaymentTime: '24 meses', 
    requestedAmount: 'S/15,000', 
    loanReasonTags: ['Educación', 'Especialización'], 
    loanExplanation: 'Curso de especialización en pediatría.', 
    repaymentJustification: 'Mejor salario tras especialización.', 
    score: 90, 
    loanHistory: ['Préstamo 1: Pagado', 'Préstamo 2: Pagado', 'Préstamo 3: Pagado'], 
    shortDescription: 'Dedicada a mejorar la salud de los niños.',
    profileImage: 'https://randomuser.me/api/portraits/women/2.jpg'
  },

];

export const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <FlatList
        data={profiles}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('ProfileDetail', { profile: item })}>
            <View style={{ padding: 20, borderBottomWidth: 1, flexDirection: 'row', alignItems: 'center' }}>
              <Image source={{ uri: item.profileImage }} style={{ width: 50, height: 50, borderRadius: 25, marginRight: 10 }} />
              <View>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.name}</Text>
                <Text>Edad: {item.age}</Text>
                <Text>Ocupación: {item.status}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};