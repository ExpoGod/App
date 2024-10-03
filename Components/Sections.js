import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Medical from "./Medical";
import Sports from "./Sports";
import Legal from "./Legal";

const Tab = createMaterialTopTabNavigator();

const Sections = () => {
  return (
    <Tab.Navigator
      initialRouteName="Legal"
      screenOptions={({ route }) => ({
        tabBarLabel:
          route.name === "Legal"
            ? "Juridico"
            : route.name === "Medical"
            ? "Medico"
            : "Deportivo",
        tabBarActiveTintColor: "#1210af",
        tabBarInactiveTintColor: "#908e9b",
      })}
    >
      <Tab.Screen
        name="Legal"
        component={Legal}
        options={{
          tabBarLabel: "Juridico",
          tabBarLabelStyle: { fontFamily: "Poppins_600SemiBold", fontSize: 20 },
        }}
      />
      <Tab.Screen
        name="Meical"
        component={Medical}
        options={{
          tabBarLabel: "Medico",
          tabBarLabelStyle: { fontFamily: "Poppins_600SemiBold", fontSize: 20 },
        }}
      />
      <Tab.Screen
        name="Sports"
        component={Sports}
        options={{
          tabBarLabel: "Deportivo",
          tabBarLabelStyle: { fontFamily: "Poppins_600SemiBold", fontSize: 20 },
        }}
      />
    </Tab.Navigator>
  );
};

export default Sections;
