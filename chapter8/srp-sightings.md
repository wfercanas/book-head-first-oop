# SRP Sightings

## SRP in Todd and Gina's Door

By stating that the door is responsible for closing and opening itself, we can continue by making it responsible for autoclosing it.
Then the Remote and any other device can rely on the door knowing that the behavior is controlled there, and their function to trigger signals is just enough.

## First instance

Example: Gary's Games

The tile itself can be responsible for knowing and handling their own units. The board could've been made responsible for holding the state of the whole set of tiles states, but the units do not belong to the board as a whole. They belong to a single tile at a time.

## Second instance

Example: Rick's instruments

The usage of enumerators for Wood, Builder and so on make each enum responsible for the possible set of values that we can find for the instruments in their own domain. A spec or a single instrument instance should not be held accountable for handling the variations in those properties for the universe of instruments. With the enum, we're focusing the responsibility for each attribute in its own enum.
