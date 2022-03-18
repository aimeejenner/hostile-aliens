import { AlienShip, getAllShips, selectTarget } from "./script.js";

describe("AlienShip class", () => {
    test("Should return a ship object with the correct key/value pairs", () => {
        const output = new AlienShip("Mother", 100, 9, 1);
        expect(output).toEqual({
            shipType: 'Mother', 
            totalHitPoints: 100, 
            pointsLostPerHit: 9, 
            numberOfShips: 1
        });
    });
    test("Should return an array containing the correct number of ship objects", () => {
        const ship = new AlienShip("Defence", 80, 10, 5);
        const output = ship.getShipsArr();
        expect(Array.isArray(output)).toBe(true);
        expect(output.length).toEqual(5);
    });
    test("Should reduce ship total hit points by pointsLostPerHit amount", () => {
        const ship = new AlienShip("Attack", 45, 12, 8);
        const output = ship.reduceHitPoints();
        expect(output).toEqual(33);

    })
})

describe("getAllShips function", () => {
    test("Should return an array containing all of the ship objects", () => {
        const output = getAllShips();
        expect(Array.isArray(output)).toBe(true);
        expect(output.length).toEqual(14);
    });
})

describe("selectTarget function", () => {
    test("Should return a ship object", () => {
        const output = selectTarget();
        expect(output.constructor.name).toEqual("AlienShip");
    })
})
