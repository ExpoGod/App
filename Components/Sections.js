import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Medical from "./Medical";
import Sports from "./Sports";
import Legal from "./Legal";

const Tab = createMaterialTopTabNavigator();

const Sections = () => {
  return (
    <Tab.Navigator initialRouteName="Legal">
      <Tab.Screen
        name="Legal"
        component={Legal}
        options={{ tabBarLabel: "Juridico" }}
      />
      <Tab.Screen
        name="Educational"
        component={Medical}
        options={{ tabBarLabel: "Medico" }}
      />
      <Tab.Screen
        name="Sports"
        component={Sports}
        options={{ tabBarLabel: "Deportivo" }}
      />
    </Tab.Navigator>
  );
};

export default Sections;
