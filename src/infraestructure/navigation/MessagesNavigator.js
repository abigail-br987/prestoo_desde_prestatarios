import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';

import { MessagesDetailScreen } from '../../features/messages/screens/MessagesDetailScreen';
import { MessagesScreen } from '../../features/messages/screens/MessagesScreen';
const RestaurantStack = createStackNavigator();

export const MessagesNavigator = () => {
  return (
    <RestaurantStack.Navigator>
      <RestaurantStack.Screen
        name="Restaurants"
        component={MessagesScreen}
      />
      <RestaurantStack.Screen
        name="RestaurantDetail"
        component={MessagesDetailScreen}
      />
    </RestaurantStack.Navigator>
  );
};
