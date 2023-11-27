import Menu from "./screens/Menu.js";
import ValorParaCor from "./screens/ValorParaCor.js";
import CorParaValor from "./screens/CorParaValor.js";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

export default function App() {

  const Pilha = createStackNavigator();

  return (
    <NavigationContainer>
      <Pilha.Navigator>
        <Pilha.Screen component={Menu} name="Menu"/>
        <Pilha.Screen component={CorParaValor} name="CorParaValor"/>
        <Pilha.Screen component={ValorParaCor} name="ValorParaCor"/>
      </Pilha.Navigator>
    </NavigationContainer>
  );
}