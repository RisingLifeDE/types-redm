/**
 * @module @risinglife/redm-shared
 */
export class VectorBase {
    components;
    toArray() {
        return [...this.components];
    }
    toFixed(digits = 2) {
        const fixedComponents = this.components.map((component) => parseFloat(component.toFixed(digits)));
        return this.createInstance(...fixedComponents);
    }
    get length() {
        return Math.sqrt(this.lengthSquared);
    }
    get lengthSquared() {
        return this.components.reduce((sum, comp) => sum + comp * comp, 0);
    }
    get negative() {
        return this.createInstance(...this.components.map((comp) => -comp));
    }
    get inverse() {
        return this.createInstance(...this.components.map((comp) => 1 / comp));
    }
    get normalized() {
        const len = this.length;
        return len === 0
            ? this.createInstance(...this.components)
            : this.createInstance(...this.components.map((comp) => comp / len));
    }
    toDegrees() {
        return this.createInstance(...this.components.map((comp) => comp * (180 / Math.PI)));
    }
    toRadians() {
        return this.createInstance(...this.components.map((comp) => comp * (Math.PI / 180)));
    }
    createInstance(...components) {
        throw new Error('createInstance method not implemented.');
    }
}
export class Vector2 extends VectorBase {
    x;
    y;
    constructor(xy, y) {
        super();
        if (Array.isArray(xy) && xy.length === 2) {
            this.x = xy[0];
            this.y = xy[1];
        }
        else if (typeof xy === 'number' && typeof y === 'number') {
            this.x = xy;
            this.y = y;
        }
        else if (typeof xy === 'object' && xy !== null && 'x' in xy && 'y' in xy) {
            const vector = xy;
            this.x = vector.x;
            this.y = vector.y;
        }
        else {
            this.x = 0;
            this.y = 0;
        }
        this.components = [this.x, this.y];
    }
    createInstance(...components) {
        return new Vector2(components[0], components[1]);
    }
    add(...args) {
        const [x, y] = this.getXY(args);
        return new Vector2(this.x + x, this.y + y);
    }
    sub(...args) {
        const [x, y] = this.getXY(args);
        return new Vector2(this.x - x, this.y - y);
    }
    mul(...args) {
        const [x, y] = this.getXY(args);
        return new Vector2(this.x * x, this.y * y);
    }
    div(...args) {
        const [x, y] = this.getXY(args);
        return new Vector2(this.x / x, this.y / y);
    }
    dot(...args) {
        const [x, y] = this.getXY(args);
        return this.x * x + this.y * y;
    }
    distanceTo(...args) {
        const [x, y] = this.getXY(args);
        return Math.sqrt(this.distanceToSquared(x, y));
    }
    distanceToSquared(...args) {
        const [x, y] = this.getXY(args);
        return (this.x - x) ** 2 + (this.y - y) ** 2;
    }
    angleTo(...args) {
        const [x, y] = this.getXY(args);
        return Math.atan2(y - this.y, x - this.x);
    }
    angleToDegrees(...args) {
        if (args.length === 1 && typeof args[0] === 'object' && 'x' in args[0]) {
            return this.angleTo(args[0].x, args[0].y) * (180 / Math.PI);
        }
        else if (args.length === 2) {
            return this.angleTo(args[0], args[1]) * (180 / Math.PI);
        }
        throw new Error('Ungültige Argumente');
    }
    isInRange(range, ...args) {
        const [x, y] = this.getXY(args);
        return this.distanceToSquared(x, y) <= range ** 2;
    }
    lerp(ratio, ...args) {
        const [x, y] = this.getXY(args);
        return new Vector2(this.x + (x - this.x) * ratio, this.y + (y - this.y) * ratio);
    }
    toArray() {
        return [this.x, this.y];
    }
    static zero = new Vector2(0, 0);
    static one = new Vector2(1, 1);
    static up = new Vector2(0, 1);
    static down = new Vector2(0, -1);
    static left = new Vector2(-1, 0);
    static right = new Vector2(1, 0);
    static negativeInfinity = new Vector2(-Infinity, -Infinity);
    static positiveInfinity = new Vector2(Infinity, Infinity);
    static fromArray(xy) {
        return new Vector2(xy);
    }
    static fromObject(xy) {
        return new Vector2(xy);
    }
    getXY(args) {
        if (args.length === 2) {
            return [args[0], args[1]];
        }
        else if (args.length === 1) {
            const arg = args[0];
            if (arg instanceof Vector2) {
                return [arg.x, arg.y];
            }
            else if (Array.isArray(arg)) {
                return [arg[0], arg[1]];
            }
            else {
                return [arg, arg];
            }
        }
        return [0, 0];
    }
}
export class Vector3 extends VectorBase {
    x;
    y;
    z;
    constructor(xyz, y, z) {
        super();
        if (Array.isArray(xyz) && xyz.length === 3) {
            this.x = xyz[0];
            this.y = xyz[1];
            this.z = xyz[2];
        }
        else if (typeof xyz === 'number' && typeof y === 'number' && typeof z === 'number') {
            this.x = xyz;
            this.y = y;
            this.z = z;
        }
        else if (typeof xyz === 'object' && xyz !== null && 'x' in xyz && 'y' in xyz && 'z' in xyz) {
            const vector = xyz;
            this.x = vector.x;
            this.y = vector.y;
            this.z = vector.z;
        }
        else {
            this.x = 0;
            this.y = 0;
            this.z = 0;
        }
        this.components = [this.x, this.y, this.z];
    }
    createInstance(...components) {
        return new Vector3(components[0], components[1], components[2]);
    }
    add(...args) {
        const [x, y, z] = this.getXYZ(args);
        return new Vector3(this.x + x, this.y + y, this.z + z);
    }
    sub(...args) {
        const [x, y, z] = this.getXYZ(args);
        return new Vector3(this.x - x, this.y - y, this.z - z);
    }
    mul(...args) {
        const [x, y, z] = this.getXYZ(args);
        return new Vector3(this.x * x, this.y * y, this.z * z);
    }
    div(...args) {
        const [x, y, z] = this.getXYZ(args);
        return new Vector3(this.x / x, this.y / y, this.z / z);
    }
    dot(...args) {
        const [x, y, z] = this.getXYZ(args);
        return this.x * x + this.y * y + this.z * z;
    }
    cross(...args) {
        const [x, y, z] = this.getXYZ(args);
        return new Vector3(this.y * z - this.z * y, this.z * x - this.x * z, this.x * y - this.y * x);
    }
    distanceTo(...args) {
        const [x, y, z] = this.getXYZ(args);
        return Math.sqrt(this.distanceToSquared(x, y, z));
    }
    distanceToSquared(...args) {
        const [x, y, z] = this.getXYZ(args);
        return (this.x - x) ** 2 + (this.y - y) ** 2 + (this.z - z) ** 2;
    }
    angleTo(...args) {
        const [x, y, z] = this.getXYZ(args);
        const dotProduct = this.dot(x, y, z);
        const lengths = this.length * Math.sqrt(x * x + y * y + z * z);
        return Math.acos(dotProduct / lengths);
    }
    angleToDegrees(...args) {
        if (args.length === 1 && typeof args[0] === 'object' && 'x' in args[0]) {
            return this.angleTo(args[0].x, args[0].y, args[0].z) * (180 / Math.PI);
        }
        else if (args.length === 3) {
            return this.angleTo(args[0], args[1], args[2]) * (180 / Math.PI);
        }
        throw new Error('Ungültige Argumente');
    }
    isInRange(range, ...args) {
        const [x, y, z] = this.getXYZ(args);
        return this.distanceToSquared(x, y, z) <= range ** 2;
    }
    lerp(ratio, ...args) {
        const [x, y, z] = this.getXYZ(args);
        return new Vector3(this.x + (x - this.x) * ratio, this.y + (y - this.y) * ratio, this.z + (z - this.z) * ratio);
    }
    toArray() {
        return [this.x, this.y, this.z];
    }
    static zero = new Vector3(0, 0, 0);
    static one = new Vector3(1, 1, 1);
    static back = new Vector3(0, 0, -1);
    static up = new Vector3(0, 1, 0);
    static down = new Vector3(0, -1, 0);
    static forward = new Vector3(0, 0, 1);
    static left = new Vector3(-1, 0, 0);
    static right = new Vector3(1, 0, 0);
    static negativeInfinity = new Vector3(-Infinity, -Infinity, -Infinity);
    static positiveInfinity = new Vector3(Infinity, Infinity, Infinity);
    static fromArray(xyz) {
        return new Vector3(xyz);
    }
    static fromObject(xyz) {
        return new Vector3(xyz);
    }
    getXYZ(args) {
        if (args.length === 3) {
            return [args[0], args[1], args[2]];
        }
        else if (args.length === 1) {
            const arg = args[0];
            if (arg instanceof Vector3) {
                return [arg.x, arg.y, arg.z];
            }
            else if (Array.isArray(arg)) {
                return [arg[0], arg[1], arg[2]];
            }
            else {
                return [arg, arg, arg];
            }
        }
        else if (args.length === 2) {
            return [args[0], args[1], args[1]];
        }
        return [0, 0, 0];
    }
}
export class Entity {
}
export class Ped extends Entity {
}
export class Player extends Entity {
}
export class Vehicle extends Entity {
}
export class Object extends Entity {
}
export var Enums;
(function (Enums) {
    let ColShapeType;
    (function (ColShapeType) {
        ColShapeType[ColShapeType["SPHERE"] = 0] = "SPHERE";
        ColShapeType[ColShapeType["CYLINDER"] = 1] = "CYLINDER";
        ColShapeType[ColShapeType["CIRCLE"] = 2] = "CIRCLE";
        ColShapeType[ColShapeType["CUBOID"] = 3] = "CUBOID";
        ColShapeType[ColShapeType["RECT"] = 4] = "RECT";
        ColShapeType[ColShapeType["CHECKPOINT_CYLINDER"] = 5] = "CHECKPOINT_CYLINDER";
        ColShapeType[ColShapeType["POLYGON"] = 6] = "POLYGON";
    })(ColShapeType || (ColShapeType = {}));
    let KeyCode;
    (function (KeyCode) {
        KeyCode[KeyCode["KEY0"] = 48] = "KEY0";
        KeyCode[KeyCode["KEY1"] = 49] = "KEY1";
        KeyCode[KeyCode["KEY2"] = 50] = "KEY2";
        KeyCode[KeyCode["KEY3"] = 51] = "KEY3";
        KeyCode[KeyCode["KEY4"] = 52] = "KEY4";
        KeyCode[KeyCode["KEY5"] = 53] = "KEY5";
        KeyCode[KeyCode["KEY6"] = 54] = "KEY6";
        KeyCode[KeyCode["KEY7"] = 55] = "KEY7";
        KeyCode[KeyCode["KEY8"] = 56] = "KEY8";
        KeyCode[KeyCode["KEY9"] = 57] = "KEY9";
        KeyCode[KeyCode["BACKSPACE"] = 8] = "BACKSPACE";
        KeyCode[KeyCode["TAB"] = 9] = "TAB";
        KeyCode[KeyCode["CLEAR"] = 12] = "CLEAR";
        KeyCode[KeyCode["ENTER"] = 13] = "ENTER";
        KeyCode[KeyCode["RETURN"] = 13] = "RETURN";
        KeyCode[KeyCode["ESCAPE"] = 27] = "ESCAPE";
        KeyCode[KeyCode["SPACE"] = 32] = "SPACE";
        KeyCode[KeyCode["LEFT"] = 37] = "LEFT";
        KeyCode[KeyCode["UP"] = 38] = "UP";
        KeyCode[KeyCode["RIGHT"] = 39] = "RIGHT";
        KeyCode[KeyCode["DOWN"] = 40] = "DOWN";
        KeyCode[KeyCode["DELETE"] = 46] = "DELETE";
        KeyCode[KeyCode["INSERT"] = 45] = "INSERT";
        KeyCode[KeyCode["HOME"] = 36] = "HOME";
        KeyCode[KeyCode["END"] = 35] = "END";
        KeyCode[KeyCode["PAGE_UP"] = 33] = "PAGE_UP";
        KeyCode[KeyCode["PAGE_DOWN"] = 34] = "PAGE_DOWN";
        KeyCode[KeyCode["CAPS_LOCK"] = 20] = "CAPS_LOCK";
        KeyCode[KeyCode["SHIFT"] = 16] = "SHIFT";
        KeyCode[KeyCode["ALT"] = 18] = "ALT";
        KeyCode[KeyCode["CTRL"] = 17] = "CTRL";
        KeyCode[KeyCode["-"] = 189] = "-";
        KeyCode[KeyCode["="] = 187] = "=";
        KeyCode[KeyCode[","] = 188] = ",";
        KeyCode[KeyCode[";"] = 186] = ";";
        KeyCode[KeyCode["."] = 190] = ".";
        KeyCode[KeyCode["/"] = 191] = "/";
        KeyCode[KeyCode["`"] = 192] = "`";
        KeyCode[KeyCode["~"] = 192] = "~";
        KeyCode[KeyCode["'"] = 222] = "'";
        KeyCode[KeyCode["["] = 219] = "[";
        KeyCode[KeyCode["]"] = 221] = "]";
        KeyCode[KeyCode["\\"] = 220] = "\\";
        KeyCode[KeyCode["KP_MULTIPLY"] = 106] = "KP_MULTIPLY";
        KeyCode[KeyCode["KP_ADD"] = 107] = "KP_ADD";
        KeyCode[KeyCode["KP_SUBTRACT"] = 109] = "KP_SUBTRACT";
        KeyCode[KeyCode["KP_DECIMAL"] = 110] = "KP_DECIMAL";
        KeyCode[KeyCode["KP_DIVIDE"] = 111] = "KP_DIVIDE";
        KeyCode[KeyCode["A"] = 65] = "A";
        KeyCode[KeyCode["B"] = 66] = "B";
        KeyCode[KeyCode["C"] = 67] = "C";
        KeyCode[KeyCode["D"] = 68] = "D";
        KeyCode[KeyCode["E"] = 69] = "E";
        KeyCode[KeyCode["F"] = 70] = "F";
        KeyCode[KeyCode["G"] = 71] = "G";
        KeyCode[KeyCode["H"] = 72] = "H";
        KeyCode[KeyCode["I"] = 73] = "I";
        KeyCode[KeyCode["J"] = 74] = "J";
        KeyCode[KeyCode["K"] = 75] = "K";
        KeyCode[KeyCode["L"] = 76] = "L";
        KeyCode[KeyCode["M"] = 77] = "M";
        KeyCode[KeyCode["N"] = 78] = "N";
        KeyCode[KeyCode["O"] = 79] = "O";
        KeyCode[KeyCode["P"] = 80] = "P";
        KeyCode[KeyCode["Q"] = 81] = "Q";
        KeyCode[KeyCode["R"] = 82] = "R";
        KeyCode[KeyCode["S"] = 83] = "S";
        KeyCode[KeyCode["T"] = 84] = "T";
        KeyCode[KeyCode["U"] = 85] = "U";
        KeyCode[KeyCode["V"] = 86] = "V";
        KeyCode[KeyCode["W"] = 87] = "W";
        KeyCode[KeyCode["X"] = 88] = "X";
        KeyCode[KeyCode["Y"] = 89] = "Y";
        KeyCode[KeyCode["Z"] = 90] = "Z";
        KeyCode[KeyCode["F1"] = 112] = "F1";
        KeyCode[KeyCode["F2"] = 113] = "F2";
        KeyCode[KeyCode["F3"] = 114] = "F3";
        KeyCode[KeyCode["F4"] = 115] = "F4";
        KeyCode[KeyCode["F5"] = 116] = "F5";
        KeyCode[KeyCode["F6"] = 117] = "F6";
        KeyCode[KeyCode["F7"] = 118] = "F7";
        KeyCode[KeyCode["F8"] = 119] = "F8";
        KeyCode[KeyCode["F9"] = 120] = "F9";
        KeyCode[KeyCode["F10"] = 121] = "F10";
        KeyCode[KeyCode["F11"] = 122] = "F11";
        KeyCode[KeyCode["F12"] = 123] = "F12";
        KeyCode[KeyCode["F13"] = 124] = "F13";
        KeyCode[KeyCode["F14"] = 125] = "F14";
        KeyCode[KeyCode["F15"] = 126] = "F15";
        KeyCode[KeyCode["F16"] = 127] = "F16";
        KeyCode[KeyCode["F17"] = 128] = "F17";
        KeyCode[KeyCode["F18"] = 129] = "F18";
        KeyCode[KeyCode["F19"] = 130] = "F19";
        KeyCode[KeyCode["F20"] = 131] = "F20";
        KeyCode[KeyCode["NUMPAD0"] = 96] = "NUMPAD0";
        KeyCode[KeyCode["NUMPAD1"] = 97] = "NUMPAD1";
        KeyCode[KeyCode["NUMPAD2"] = 98] = "NUMPAD2";
        KeyCode[KeyCode["NUMPAD3"] = 99] = "NUMPAD3";
        KeyCode[KeyCode["NUMPAD4"] = 100] = "NUMPAD4";
        KeyCode[KeyCode["NUMPAD5"] = 101] = "NUMPAD5";
        KeyCode[KeyCode["NUMPAD6"] = 102] = "NUMPAD6";
        KeyCode[KeyCode["NUMPAD7"] = 103] = "NUMPAD7";
        KeyCode[KeyCode["NUMPAD8"] = 104] = "NUMPAD8";
        KeyCode[KeyCode["NUMPAD9"] = 105] = "NUMPAD9";
        KeyCode[KeyCode["MOUSE_LEFT"] = 1] = "MOUSE_LEFT";
        KeyCode[KeyCode["MOUSE_RIGHT"] = 2] = "MOUSE_RIGHT";
        KeyCode[KeyCode["MOUSE_MIDDLE"] = 4] = "MOUSE_MIDDLE";
    })(KeyCode || (KeyCode = {}));
    let WeatherType;
    (function (WeatherType) {
        WeatherType[WeatherType["SUNNY"] = 0] = "SUNNY";
        WeatherType[WeatherType["MISTY"] = 1] = "MISTY";
        WeatherType[WeatherType["FOG"] = 2] = "FOG";
        WeatherType[WeatherType["CLOUDS"] = 3] = "CLOUDS";
        WeatherType[WeatherType["OVERCAST"] = 4] = "OVERCAST";
        WeatherType[WeatherType["OVERCASTDARK"] = 5] = "OVERCASTDARK";
        WeatherType[WeatherType["DRIZZLE"] = 6] = "DRIZZLE";
        WeatherType[WeatherType["RAIN"] = 7] = "RAIN";
        WeatherType[WeatherType["THUNDER"] = 8] = "THUNDER";
        WeatherType[WeatherType["THUNDERSTORM"] = 9] = "THUNDERSTORM";
        WeatherType[WeatherType["HURRICANE"] = 10] = "HURRICANE";
        WeatherType[WeatherType["HIGHPRESSURE"] = 11] = "HIGHPRESSURE";
        WeatherType[WeatherType["SHOWER"] = 12] = "SHOWER";
        WeatherType[WeatherType["HAIL"] = 13] = "HAIL";
        WeatherType[WeatherType["SLEET"] = 14] = "SLEET";
        WeatherType[WeatherType["SNOWCLEARING"] = 15] = "SNOWCLEARING";
        WeatherType[WeatherType["SNOWLIGHT"] = 16] = "SNOWLIGHT";
        WeatherType[WeatherType["SNOW"] = 17] = "SNOW";
        WeatherType[WeatherType["BLIZZARD"] = 18] = "BLIZZARD";
        WeatherType[WeatherType["GROUNDBLIZZARD"] = 19] = "GROUNDBLIZZARD";
        WeatherType[WeatherType["WHITEOUT"] = 20] = "WHITEOUT";
        WeatherType[WeatherType["SANDSTORM"] = 21] = "SANDSTORM";
    })(WeatherType || (WeatherType = {}));
    let BaseObjectType;
    (function (BaseObjectType) {
        BaseObjectType[BaseObjectType["PLAYER"] = 0] = "PLAYER";
        BaseObjectType[BaseObjectType["VEHICLE"] = 1] = "VEHICLE";
        BaseObjectType[BaseObjectType["PED"] = 2] = "PED";
        BaseObjectType[BaseObjectType["OBJECT"] = 3] = "OBJECT";
        BaseObjectType[BaseObjectType["BLIP"] = 4] = "BLIP";
        BaseObjectType[BaseObjectType["WEBVIEW"] = 5] = "WEBVIEW";
        BaseObjectType[BaseObjectType["VOICE_CHANNEL"] = 6] = "VOICE_CHANNEL";
        BaseObjectType[BaseObjectType["COLSHAPE"] = 7] = "COLSHAPE";
        BaseObjectType[BaseObjectType["CHECKPOINT"] = 8] = "CHECKPOINT";
        BaseObjectType[BaseObjectType["WEBSOCKET_CLIENT"] = 9] = "WEBSOCKET_CLIENT";
        BaseObjectType[BaseObjectType["HTTP_CLIENT"] = 10] = "HTTP_CLIENT";
        BaseObjectType[BaseObjectType["AUDIO"] = 11] = "AUDIO";
        BaseObjectType[BaseObjectType["AUDIO_OUTPUT"] = 12] = "AUDIO_OUTPUT";
        BaseObjectType[BaseObjectType["AUDIO_OUTPUT_WORLD"] = 13] = "AUDIO_OUTPUT_WORLD";
        BaseObjectType[BaseObjectType["AUDIO_OUTPUT_ATTACHED"] = 14] = "AUDIO_OUTPUT_ATTACHED";
        BaseObjectType[BaseObjectType["AUDIO_OUTPUT_FRONTEND"] = 15] = "AUDIO_OUTPUT_FRONTEND";
        BaseObjectType[BaseObjectType["RML_ELEMENT"] = 16] = "RML_ELEMENT";
        BaseObjectType[BaseObjectType["RML_DOCUMENT"] = 17] = "RML_DOCUMENT";
        BaseObjectType[BaseObjectType["LOCAL_PLAYER"] = 18] = "LOCAL_PLAYER";
        BaseObjectType[BaseObjectType["LOCAL_OBJECT"] = 19] = "LOCAL_OBJECT";
        BaseObjectType[BaseObjectType["VIRTUAL_ENTITY"] = 20] = "VIRTUAL_ENTITY";
        BaseObjectType[BaseObjectType["VIRTUAL_ENTITY_GROUP"] = 21] = "VIRTUAL_ENTITY_GROUP";
        BaseObjectType[BaseObjectType["MARKER"] = 22] = "MARKER";
        BaseObjectType[BaseObjectType["TEXT_LABEL"] = 23] = "TEXT_LABEL";
        BaseObjectType[BaseObjectType["LOCAL_PED"] = 24] = "LOCAL_PED";
        BaseObjectType[BaseObjectType["LOCAL_VEHICLE"] = 25] = "LOCAL_VEHICLE";
        BaseObjectType[BaseObjectType["AUDIO_FILTER"] = 26] = "AUDIO_FILTER";
        BaseObjectType[BaseObjectType["FONT"] = 29] = "FONT";
        BaseObjectType[BaseObjectType["SIZE"] = 30] = "SIZE";
    })(BaseObjectType || (BaseObjectType = {}));
    let ExplosionType;
    (function (ExplosionType) {
        ExplosionType[ExplosionType["GRENADE"] = 0] = "GRENADE";
        ExplosionType[ExplosionType["GRENADELAUNCHER"] = 1] = "GRENADELAUNCHER";
        ExplosionType[ExplosionType["STICKYBOMB"] = 2] = "STICKYBOMB";
        ExplosionType[ExplosionType["MOLOTOV"] = 3] = "MOLOTOV";
        ExplosionType[ExplosionType["ROCKET"] = 4] = "ROCKET";
        ExplosionType[ExplosionType["TANKSHELL"] = 5] = "TANKSHELL";
        ExplosionType[ExplosionType["HI_OCTANE"] = 6] = "HI_OCTANE";
        ExplosionType[ExplosionType["CAR"] = 7] = "CAR";
        ExplosionType[ExplosionType["PLANE"] = 8] = "PLANE";
        ExplosionType[ExplosionType["PETROL_PUMP"] = 9] = "PETROL_PUMP";
        ExplosionType[ExplosionType["BIKE"] = 10] = "BIKE";
        ExplosionType[ExplosionType["DIR_STEAM"] = 11] = "DIR_STEAM";
        ExplosionType[ExplosionType["DIR_FLAME"] = 12] = "DIR_FLAME";
        ExplosionType[ExplosionType["DIR_WATER_HYDRANT"] = 13] = "DIR_WATER_HYDRANT";
        ExplosionType[ExplosionType["DIR_GAS_CANISTER"] = 14] = "DIR_GAS_CANISTER";
        ExplosionType[ExplosionType["BOAT"] = 15] = "BOAT";
        ExplosionType[ExplosionType["SHIP_DESTROY"] = 16] = "SHIP_DESTROY";
        ExplosionType[ExplosionType["TRUCK"] = 17] = "TRUCK";
        ExplosionType[ExplosionType["BULLET"] = 18] = "BULLET";
        ExplosionType[ExplosionType["SMOKEGRENADELAUNCHER"] = 19] = "SMOKEGRENADELAUNCHER";
        ExplosionType[ExplosionType["SMOKEGRENADE"] = 20] = "SMOKEGRENADE";
        ExplosionType[ExplosionType["BZGAS"] = 21] = "BZGAS";
        ExplosionType[ExplosionType["FLARE"] = 22] = "FLARE";
        ExplosionType[ExplosionType["GAS_CANISTER"] = 23] = "GAS_CANISTER";
        ExplosionType[ExplosionType["EXTINGUISHER"] = 24] = "EXTINGUISHER";
        ExplosionType[ExplosionType["PROGRAMMABLEAR"] = 25] = "PROGRAMMABLEAR";
        ExplosionType[ExplosionType["TRAIN"] = 26] = "TRAIN";
        ExplosionType[ExplosionType["BARREL"] = 27] = "BARREL";
        ExplosionType[ExplosionType["PROPANE"] = 28] = "PROPANE";
        ExplosionType[ExplosionType["BLIMP"] = 29] = "BLIMP";
        ExplosionType[ExplosionType["DIR_FLAME_EXPLODE"] = 30] = "DIR_FLAME_EXPLODE";
        ExplosionType[ExplosionType["TANKER"] = 31] = "TANKER";
        ExplosionType[ExplosionType["PLANE_ROCKET"] = 32] = "PLANE_ROCKET";
        ExplosionType[ExplosionType["VEHICLE_BULLET"] = 33] = "VEHICLE_BULLET";
        ExplosionType[ExplosionType["GAS_TANK"] = 34] = "GAS_TANK";
        ExplosionType[ExplosionType["FIREWORK"] = 35] = "FIREWORK";
        ExplosionType[ExplosionType["SNOWBALL"] = 36] = "SNOWBALL";
        ExplosionType[ExplosionType["PROXMINE"] = 37] = "PROXMINE";
        ExplosionType[ExplosionType["VALKYRIE_CANNON"] = 38] = "VALKYRIE_CANNON";
        ExplosionType[ExplosionType["UNKNOWN"] = -1] = "UNKNOWN";
    })(ExplosionType || (ExplosionType = {}));
    let VehicleModelType;
    (function (VehicleModelType) {
        VehicleModelType[VehicleModelType["INVALID"] = 0] = "INVALID";
        VehicleModelType[VehicleModelType["PED"] = 1] = "PED";
        VehicleModelType[VehicleModelType["AUTOMOBILE"] = 2] = "AUTOMOBILE";
        VehicleModelType[VehicleModelType["PLANE"] = 3] = "PLANE";
        VehicleModelType[VehicleModelType["TRAILER"] = 4] = "TRAILER";
        VehicleModelType[VehicleModelType["QUAD_BIKE"] = 5] = "QUAD_BIKE";
        VehicleModelType[VehicleModelType["SUBMARINE_CAR"] = 6] = "SUBMARINE_CAR";
        VehicleModelType[VehicleModelType["AMPHIBIOUS_AUTOMOBILE"] = 7] = "AMPHIBIOUS_AUTOMOBILE";
        VehicleModelType[VehicleModelType["AMPHIBIOUS_QUAD_BIKE"] = 8] = "AMPHIBIOUS_QUAD_BIKE";
        VehicleModelType[VehicleModelType["HELI"] = 9] = "HELI";
        VehicleModelType[VehicleModelType["BLIMP"] = 10] = "BLIMP";
        VehicleModelType[VehicleModelType["AUTOGYRO"] = 11] = "AUTOGYRO";
        VehicleModelType[VehicleModelType["BIKE"] = 12] = "BIKE";
        VehicleModelType[VehicleModelType["BMX"] = 13] = "BMX";
        VehicleModelType[VehicleModelType["BOAT"] = 14] = "BOAT";
        VehicleModelType[VehicleModelType["TRAIN"] = 15] = "TRAIN";
        VehicleModelType[VehicleModelType["SUBMARINE"] = 16] = "SUBMARINE";
        VehicleModelType[VehicleModelType["OBJECT"] = 17] = "OBJECT";
    })(VehicleModelType || (VehicleModelType = {}));
    let BodyPart;
    (function (BodyPart) {
        BodyPart[BodyPart["PELVIS"] = 0] = "PELVIS";
        BodyPart[BodyPart["LEFT_HIP"] = 1] = "LEFT_HIP";
        BodyPart[BodyPart["LEFT_LEG"] = 2] = "LEFT_LEG";
        BodyPart[BodyPart["LEFT_FOOT"] = 3] = "LEFT_FOOT";
        BodyPart[BodyPart["RIGHT_HIP"] = 4] = "RIGHT_HIP";
        BodyPart[BodyPart["RIGHT_LEG"] = 5] = "RIGHT_LEG";
        BodyPart[BodyPart["RIGHT_FOOT"] = 6] = "RIGHT_FOOT";
        BodyPart[BodyPart["LOWER_TORSO"] = 7] = "LOWER_TORSO";
        BodyPart[BodyPart["UPPER_TORSO"] = 8] = "UPPER_TORSO";
        BodyPart[BodyPart["CHEST"] = 9] = "CHEST";
        BodyPart[BodyPart["UNDER_NECK"] = 10] = "UNDER_NECK";
        BodyPart[BodyPart["LEFT_SHOULDER"] = 11] = "LEFT_SHOULDER";
        BodyPart[BodyPart["LEFT_UPPER_ARM"] = 12] = "LEFT_UPPER_ARM";
        BodyPart[BodyPart["LEFT_ELBOW"] = 13] = "LEFT_ELBOW";
        BodyPart[BodyPart["LEFT_WRIST"] = 14] = "LEFT_WRIST";
        BodyPart[BodyPart["RIGHT_SHOULDER"] = 15] = "RIGHT_SHOULDER";
        BodyPart[BodyPart["RIGHT_UPPER_ARM"] = 16] = "RIGHT_UPPER_ARM";
        BodyPart[BodyPart["RIGHT_ELBOW"] = 17] = "RIGHT_ELBOW";
        BodyPart[BodyPart["RIGHT_WRIST"] = 18] = "RIGHT_WRIST";
        BodyPart[BodyPart["NECK"] = 19] = "NECK";
        BodyPart[BodyPart["HEAD"] = 20] = "HEAD";
        BodyPart[BodyPart["UNKNOWN"] = -1] = "UNKNOWN";
    })(BodyPart || (BodyPart = {}));
    let KeyState;
    (function (KeyState) {
        KeyState[KeyState["UP"] = 0] = "UP";
        KeyState[KeyState["DOWN"] = 1] = "DOWN";
    })(KeyState || (KeyState = {}));
    let GameFont;
    (function (GameFont) {
        GameFont[GameFont["CHALET_LONDON"] = 0] = "CHALET_LONDON";
        GameFont[GameFont["HOUSE_SCRIPT"] = 1] = "HOUSE_SCRIPT";
        GameFont[GameFont["MONOSPACE"] = 2] = "MONOSPACE";
        GameFont[GameFont["CHARLET_COMPRIME_COLONGE"] = 4] = "CHARLET_COMPRIME_COLONGE";
        GameFont[GameFont["PRICEDOWN"] = 7] = "PRICEDOWN";
    })(GameFont || (GameFont = {}));
    let TextAlign;
    (function (TextAlign) {
        TextAlign[TextAlign["CENTER"] = 0] = "CENTER";
        TextAlign[TextAlign["LEFT"] = 1] = "LEFT";
        TextAlign[TextAlign["RIGHT"] = 2] = "RIGHT";
    })(TextAlign || (TextAlign = {}));
    let WebSocketReadyState;
    (function (WebSocketReadyState) {
        WebSocketReadyState[WebSocketReadyState["CONNECTING"] = 0] = "CONNECTING";
        WebSocketReadyState[WebSocketReadyState["OPEN"] = 1] = "OPEN";
        WebSocketReadyState[WebSocketReadyState["CLOSING"] = 2] = "CLOSING";
        WebSocketReadyState[WebSocketReadyState["CLOSED"] = 3] = "CLOSED";
    })(WebSocketReadyState || (WebSocketReadyState = {}));
    let ConfigFlag;
    (function (ConfigFlag) {
        ConfigFlag["DISABLE_AUTO_WEAPON_SWAP"] = "DISABLE_AUTO_WEAPON_SWAP";
        ConfigFlag["DISABLE_PED_PROP_KNOCK_OFF"] = "DISABLE_PED_PROP_KNOCK_OFF";
        ConfigFlag["DISABLE_IDLE_CAMERA"] = "DISABLE_IDLE_CAMERA";
        ConfigFlag["DISABLE_VEHICLE_ENGINE_SHUTDOWN_ON_LEAVE"] = "DISABLE_VEHICLE_ENGINE_SHUTDOWN_ON_LEAVE";
        ConfigFlag["DISABLE_SP_ENTER_VEHICLE_CLIPSET"] = "DISABLE_SP_ENTER_VEHICLE_CLIPSET";
        ConfigFlag["FORCE_RENDER_SNOW"] = "FORCE_RENDER_SNOW";
        ConfigFlag["FORCE_HIDE_NIGHT_PROPS"] = "FORCE_HIDE_NIGHT_PROPS";
        ConfigFlag["FORCE_SHOW_NIGHT_PROPS"] = "FORCE_SHOW_NIGHT_PROPS";
        ConfigFlag["DISABLE_EMISSIVE_LIGHTS_RENDERING"] = "DISABLE_EMISSIVE_LIGHTS_RENDERING";
    })(ConfigFlag || (ConfigFlag = {}));
    let TimerType;
    (function (TimerType) {
        TimerType[TimerType["TIMER"] = 0] = "TIMER";
        TimerType[TimerType["INTERVAL"] = 1] = "INTERVAL";
        TimerType[TimerType["TIMEOUT"] = 2] = "TIMEOUT";
        TimerType[TimerType["EVERY_TICK"] = 3] = "EVERY_TICK";
        TimerType[TimerType["NEXT_TICK"] = 4] = "NEXT_TICK";
    })(TimerType || (TimerType = {}));
    let BaseObjectFilterType;
    (function (BaseObjectFilterType) {
        BaseObjectFilterType[BaseObjectFilterType["PLAYER"] = 1] = "PLAYER";
        BaseObjectFilterType[BaseObjectFilterType["VEHICLE"] = 2] = "VEHICLE";
        BaseObjectFilterType[BaseObjectFilterType["PED"] = 4] = "PED";
        BaseObjectFilterType[BaseObjectFilterType["OBJECT"] = 8] = "OBJECT";
    })(BaseObjectFilterType || (BaseObjectFilterType = {}));
    let PedConfigFlag;
    (function (PedConfigFlag) {
        PedConfigFlag[PedConfigFlag["NO_CRITICAL_HITS"] = 2] = "NO_CRITICAL_HITS";
        PedConfigFlag[PedConfigFlag["DROWNS_IN_WATER"] = 3] = "DROWNS_IN_WATER";
        PedConfigFlag[PedConfigFlag["DISABLE_RETICULE_FIXED_LOCKON"] = 4] = "DISABLE_RETICULE_FIXED_LOCKON";
        PedConfigFlag[PedConfigFlag["UPPER_BODY_DAMAGE_ANIMS_ONLY"] = 7] = "UPPER_BODY_DAMAGE_ANIMS_ONLY";
        PedConfigFlag[PedConfigFlag["NEVER_LEAVES_GROUP"] = 13] = "NEVER_LEAVES_GROUP";
        PedConfigFlag[PedConfigFlag["BLOCK_NON_TEMPORARY_EVENTS"] = 17] = "BLOCK_NON_TEMPORARY_EVENTS";
        PedConfigFlag[PedConfigFlag["CAN_PUNCH"] = 18] = "CAN_PUNCH";
        PedConfigFlag[PedConfigFlag["IGNORE_SEEN_MELEE"] = 24] = "IGNORE_SEEN_MELEE";
        PedConfigFlag[PedConfigFlag["GET_OUT_UNDRIVEABLE_VEHICLE"] = 29] = "GET_OUT_UNDRIVEABLE_VEHICLE";
        PedConfigFlag[PedConfigFlag["CAN_FLY_THRU_WINDSCREEN"] = 32] = "CAN_FLY_THRU_WINDSCREEN";
        PedConfigFlag[PedConfigFlag["DIES_WHEN_RAGDOLL"] = 33] = "DIES_WHEN_RAGDOLL";
        PedConfigFlag[PedConfigFlag["HAS_HELMET"] = 34] = "HAS_HELMET";
        PedConfigFlag[PedConfigFlag["PUT_ON_MOTORCYCLE_HELMET"] = 35] = "PUT_ON_MOTORCYCLE_HELMET";
        PedConfigFlag[PedConfigFlag["DONT_TAKE_OFF_HELMET"] = 36] = "DONT_TAKE_OFF_HELMET";
        PedConfigFlag[PedConfigFlag["DISABLE_EVASIVE_DIVES"] = 39] = "DISABLE_EVASIVE_DIVES";
        PedConfigFlag[PedConfigFlag["DONT_INFLUENCE_WANTED_LEVEL"] = 42] = "DONT_INFLUENCE_WANTED_LEVEL";
        PedConfigFlag[PedConfigFlag["DISABLE_PLAYER_LOCKON"] = 43] = "DISABLE_PLAYER_LOCKON";
        PedConfigFlag[PedConfigFlag["DISABLE_LOCKON_TO_RANDOM_PEDS"] = 44] = "DISABLE_LOCKON_TO_RANDOM_PEDS";
        PedConfigFlag[PedConfigFlag["ALLOW_LOCKON_TO_FRIENDLY_PLAYERS"] = 45] = "ALLOW_LOCKON_TO_FRIENDLY_PLAYERS";
        PedConfigFlag[PedConfigFlag["BEING_DELETED"] = 47] = "BEING_DELETED";
        PedConfigFlag[PedConfigFlag["BLOCK_WEAPON_SWITCHING"] = 48] = "BLOCK_WEAPON_SWITCHING";
        PedConfigFlag[PedConfigFlag["NO_COLLISION"] = 52] = "NO_COLLISION";
        PedConfigFlag[PedConfigFlag["IS_SHOOTING"] = 58] = "IS_SHOOTING";
        PedConfigFlag[PedConfigFlag["WAS_SHOOTING"] = 59] = "WAS_SHOOTING";
        PedConfigFlag[PedConfigFlag["IS_ON_GROUND"] = 60] = "IS_ON_GROUND";
        PedConfigFlag[PedConfigFlag["WAS_ON_GROUND"] = 61] = "WAS_ON_GROUND";
        PedConfigFlag[PedConfigFlag["IN_VEHICLE"] = 62] = "IN_VEHICLE";
        PedConfigFlag[PedConfigFlag["ON_MOUNT"] = 63] = "ON_MOUNT";
        PedConfigFlag[PedConfigFlag["ATTACHED_TO_VEHICLE"] = 64] = "ATTACHED_TO_VEHICLE";
        PedConfigFlag[PedConfigFlag["IS_SWIMMING"] = 65] = "IS_SWIMMING";
        PedConfigFlag[PedConfigFlag["WAS_SWIMMING"] = 66] = "WAS_SWIMMING";
        PedConfigFlag[PedConfigFlag["IS_SKIING"] = 67] = "IS_SKIING";
        PedConfigFlag[PedConfigFlag["IS_SITTING"] = 68] = "IS_SITTING";
        PedConfigFlag[PedConfigFlag["KILLED_BY_STEALTH"] = 69] = "KILLED_BY_STEALTH";
        PedConfigFlag[PedConfigFlag["KILLED_BY_TAKEDOWN"] = 70] = "KILLED_BY_TAKEDOWN";
        PedConfigFlag[PedConfigFlag["KNOCKEDOUT"] = 71] = "KNOCKEDOUT";
        PedConfigFlag[PedConfigFlag["IS_SNIPER_SCOPE_ACTIVE"] = 72] = "IS_SNIPER_SCOPE_ACTIVE";
        PedConfigFlag[PedConfigFlag["SUPER_DEAD"] = 73] = "SUPER_DEAD";
        PedConfigFlag[PedConfigFlag["USING_COVER_POINT"] = 75] = "USING_COVER_POINT";
        PedConfigFlag[PedConfigFlag["IS_IN_THE_AIR"] = 76] = "IS_IN_THE_AIR";
        PedConfigFlag[PedConfigFlag["IS_AIMING_GUN"] = 78] = "IS_AIMING_GUN";
        PedConfigFlag[PedConfigFlag["FORCE_PED_LOAD_COVER"] = 93] = "FORCE_PED_LOAD_COVER";
        PedConfigFlag[PedConfigFlag["VAULT_FROM_COVER"] = 97] = "VAULT_FROM_COVER";
        PedConfigFlag[PedConfigFlag["IS_DRUNK"] = 100] = "IS_DRUNK";
        PedConfigFlag[PedConfigFlag["FORCED_AIM"] = 101] = "FORCED_AIM";
        PedConfigFlag[PedConfigFlag["IS_NOT_RAGDOLL_AND_NOT_PLAYING_ANIM"] = 104] = "IS_NOT_RAGDOLL_AND_NOT_PLAYING_ANIM";
        PedConfigFlag[PedConfigFlag["FORCE_RELOAD"] = 105] = "FORCE_RELOAD";
        PedConfigFlag[PedConfigFlag["DONT_ACTIVATE_RAGDOLL_FROM_VEHICLE_IMPACT"] = 106] = "DONT_ACTIVATE_RAGDOLL_FROM_VEHICLE_IMPACT";
        PedConfigFlag[PedConfigFlag["DONT_ACTIVATE_RAGDOLL_FROM_BULLET_IMPACT"] = 107] = "DONT_ACTIVATE_RAGDOLL_FROM_BULLET_IMPACT";
        PedConfigFlag[PedConfigFlag["DONT_ACTIVATE_RAGDOLL_FROM_EXPLOSIONS"] = 108] = "DONT_ACTIVATE_RAGDOLL_FROM_EXPLOSIONS";
        PedConfigFlag[PedConfigFlag["DONT_ACTIVATE_RAGDOLL_FROM_FIRE"] = 109] = "DONT_ACTIVATE_RAGDOLL_FROM_FIRE";
        PedConfigFlag[PedConfigFlag["DONT_ACTIVATE_RAGDOLL_FROM_ELECTROCUTION"] = 110] = "DONT_ACTIVATE_RAGDOLL_FROM_ELECTROCUTION";
        PedConfigFlag[PedConfigFlag["KEEP_WEAPON_HOLSTERED_UNLESS_FIRED"] = 113] = "KEEP_WEAPON_HOLSTERED_UNLESS_FIRED";
        PedConfigFlag[PedConfigFlag["GET_OUT_BURNING_VEHICLE"] = 116] = "GET_OUT_BURNING_VEHICLE";
        PedConfigFlag[PedConfigFlag["BUMPED_BY_PLAYER"] = 117] = "BUMPED_BY_PLAYER";
        PedConfigFlag[PedConfigFlag["RUN_FROM_FIRES_AND_EXPLOSIONS"] = 118] = "RUN_FROM_FIRES_AND_EXPLOSIONS";
        PedConfigFlag[PedConfigFlag["TREAT_AS_PLAYER_DURING_TARGETING"] = 119] = "TREAT_AS_PLAYER_DURING_TARGETING";
        PedConfigFlag[PedConfigFlag["IS_HAND_CUFFED"] = 120] = "IS_HAND_CUFFED";
        PedConfigFlag[PedConfigFlag["IS_ANKLE_CUFFED"] = 121] = "IS_ANKLE_CUFFED";
        PedConfigFlag[PedConfigFlag["DISABLE_MELEE"] = 122] = "DISABLE_MELEE";
        PedConfigFlag[PedConfigFlag["DISABLE_UNARMED_DRIVEBYS"] = 123] = "DISABLE_UNARMED_DRIVEBYS";
        PedConfigFlag[PedConfigFlag["JUST_GETS_PULLED_OUT_WHEN_ELECTROCUTED"] = 124] = "JUST_GETS_PULLED_OUT_WHEN_ELECTROCUTED";
        PedConfigFlag[PedConfigFlag["NM_MESSAGE_466"] = 125] = "NM_MESSAGE_466";
        PedConfigFlag[PedConfigFlag["WILL_NOT_HOTWIRE_LAW_ENFORCEMENT_VEHICLE"] = 126] = "WILL_NOT_HOTWIRE_LAW_ENFORCEMENT_VEHICLE";
        PedConfigFlag[PedConfigFlag["WILL_COMMANDEER_RATHER_THAN_JACK"] = 127] = "WILL_COMMANDEER_RATHER_THAN_JACK";
        PedConfigFlag[PedConfigFlag["CAN_BE_AGITATED"] = 128] = "CAN_BE_AGITATED";
        PedConfigFlag[PedConfigFlag["FORCE_PED_TO_FACE_LEFT_IN_COVER"] = 129] = "FORCE_PED_TO_FACE_LEFT_IN_COVER";
        PedConfigFlag[PedConfigFlag["FORCE_PED_TO_FACE_RIGHT_IN_COVER"] = 130] = "FORCE_PED_TO_FACE_RIGHT_IN_COVER";
        PedConfigFlag[PedConfigFlag["BLOCK_PED_FROM_TURNING_IN_COVER"] = 131] = "BLOCK_PED_FROM_TURNING_IN_COVER";
        PedConfigFlag[PedConfigFlag["KEEP_RELATIONSHIP_GROUP_AFTER_CLEAN_UP"] = 132] = "KEEP_RELATIONSHIP_GROUP_AFTER_CLEAN_UP";
        PedConfigFlag[PedConfigFlag["FORCE_PED_TO_BE_DRAGGED"] = 133] = "FORCE_PED_TO_BE_DRAGGED";
        PedConfigFlag[PedConfigFlag["PREVENT_PED_FROM_REACTING_TO_BEING_JACKED"] = 134] = "PREVENT_PED_FROM_REACTING_TO_BEING_JACKED";
        PedConfigFlag[PedConfigFlag["IS_SCUBA"] = 135] = "IS_SCUBA";
        PedConfigFlag[PedConfigFlag["WILL_ARREST_RATHER_THAN_JACK"] = 136] = "WILL_ARREST_RATHER_THAN_JACK";
        PedConfigFlag[PedConfigFlag["REMOVE_DEAD_EXTRA_FAR_AWAY"] = 137] = "REMOVE_DEAD_EXTRA_FAR_AWAY";
        PedConfigFlag[PedConfigFlag["RIDING_TRAIN"] = 138] = "RIDING_TRAIN";
        PedConfigFlag[PedConfigFlag["ARREST_RESULT"] = 139] = "ARREST_RESULT";
        PedConfigFlag[PedConfigFlag["CAN_ATTACK_FRIENDLY"] = 140] = "CAN_ATTACK_FRIENDLY";
        PedConfigFlag[PedConfigFlag["WILL_JACK_ANY_PLAYER"] = 141] = "WILL_JACK_ANY_PLAYER";
        PedConfigFlag[PedConfigFlag["WILL_JACK_WANTED_PLAYERS_RATHER_THAN_STEAL_CAR"] = 144] = "WILL_JACK_WANTED_PLAYERS_RATHER_THAN_STEAL_CAR";
        PedConfigFlag[PedConfigFlag["SHOOTING_ANIM_FLAG"] = 145] = "SHOOTING_ANIM_FLAG";
        PedConfigFlag[PedConfigFlag["DISABLE_LADDER_CLIMBING"] = 146] = "DISABLE_LADDER_CLIMBING";
        PedConfigFlag[PedConfigFlag["STAIRS_DETECTED"] = 147] = "STAIRS_DETECTED";
        PedConfigFlag[PedConfigFlag["SLOPE_DETECTED"] = 148] = "SLOPE_DETECTED";
        PedConfigFlag[PedConfigFlag["COWER_INSTEAD_OF_FLEE"] = 150] = "COWER_INSTEAD_OF_FLEE";
        PedConfigFlag[PedConfigFlag["CAN_ACTIVATE_RAGDOLL_WHEN_VEHICLE_UPSIDE_DOWN"] = 151] = "CAN_ACTIVATE_RAGDOLL_WHEN_VEHICLE_UPSIDE_DOWN";
        PedConfigFlag[PedConfigFlag["ALWAYS_RESPOND_TO_CRIES_FOR_HELP"] = 152] = "ALWAYS_RESPOND_TO_CRIES_FOR_HELP";
        PedConfigFlag[PedConfigFlag["DISABLE_BLOOD_POOL_CREATION"] = 153] = "DISABLE_BLOOD_POOL_CREATION";
        PedConfigFlag[PedConfigFlag["SHOULD_FIX_IF_NO_COLLISION"] = 154] = "SHOULD_FIX_IF_NO_COLLISION";
        PedConfigFlag[PedConfigFlag["CAN_PERFORM_ARREST"] = 155] = "CAN_PERFORM_ARREST";
        PedConfigFlag[PedConfigFlag["CAN_PERFORM_UNCUFF"] = 156] = "CAN_PERFORM_UNCUFF";
        PedConfigFlag[PedConfigFlag["CAN_BE_ARRESTED"] = 157] = "CAN_BE_ARRESTED";
        PedConfigFlag[PedConfigFlag["PLAYER_PREFER_FRONT_SEAT_MP"] = 159] = "PLAYER_PREFER_FRONT_SEAT_MP";
        PedConfigFlag[PedConfigFlag["IS_INJURED"] = 166] = "IS_INJURED";
        PedConfigFlag[PedConfigFlag["DONT_ENTER_VEHICLES_IN_PLAYERS_GROUP"] = 167] = "DONT_ENTER_VEHICLES_IN_PLAYERS_GROUP";
        PedConfigFlag[PedConfigFlag["PREVENT_ALL_MELEE_TAUNTS"] = 169] = "PREVENT_ALL_MELEE_TAUNTS";
        PedConfigFlag[PedConfigFlag["IS_INJURED2"] = 170] = "IS_INJURED2";
        PedConfigFlag[PedConfigFlag["ALWAYS_SEE_APPROACHING_VEHICLES"] = 171] = "ALWAYS_SEE_APPROACHING_VEHICLES";
        PedConfigFlag[PedConfigFlag["CAN_DIVE_AWAY_FROM_APPROACHING_VEHICLES"] = 172] = "CAN_DIVE_AWAY_FROM_APPROACHING_VEHICLES";
        PedConfigFlag[PedConfigFlag["ALLOW_PLAYER_TO_INTERRUPT_VEHICLE_ENTRY_EXIT"] = 173] = "ALLOW_PLAYER_TO_INTERRUPT_VEHICLE_ENTRY_EXIT";
        PedConfigFlag[PedConfigFlag["ONLY_ATTACK_LAW_IF_PLAYER_IS_WANTED"] = 174] = "ONLY_ATTACK_LAW_IF_PLAYER_IS_WANTED";
        PedConfigFlag[PedConfigFlag["PEDS_JACKING_ME_DONT_GET_IN"] = 177] = "PEDS_JACKING_ME_DONT_GET_IN";
        PedConfigFlag[PedConfigFlag["PED_IGNORES_ANIM_INTERRUPT_EVENTS"] = 179] = "PED_IGNORES_ANIM_INTERRUPT_EVENTS";
        PedConfigFlag[PedConfigFlag["IS_IN_CUSTODY"] = 180] = "IS_IN_CUSTODY";
        PedConfigFlag[PedConfigFlag["FORCE_STANDARD_BUMP_REACTION_THRESHOLDS"] = 181] = "FORCE_STANDARD_BUMP_REACTION_THRESHOLDS";
        PedConfigFlag[PedConfigFlag["LAW_WILL_ONLY_ATTACK_IF_PLAYER_IS_WANTED"] = 182] = "LAW_WILL_ONLY_ATTACK_IF_PLAYER_IS_WANTED";
        PedConfigFlag[PedConfigFlag["IS_AGITATED"] = 183] = "IS_AGITATED";
        PedConfigFlag[PedConfigFlag["PREVENT_AUTO_SHUFFLE_TO_DRIVERS_SEAT"] = 184] = "PREVENT_AUTO_SHUFFLE_TO_DRIVERS_SEAT";
        PedConfigFlag[PedConfigFlag["USE_KINEMATIC_MODE_WHEN_STATIONARY"] = 185] = "USE_KINEMATIC_MODE_WHEN_STATIONARY";
        PedConfigFlag[PedConfigFlag["ENABLE_WEAPON_BLOCKING"] = 186] = "ENABLE_WEAPON_BLOCKING";
        PedConfigFlag[PedConfigFlag["HAS_HURT_STARTED"] = 187] = "HAS_HURT_STARTED";
        PedConfigFlag[PedConfigFlag["DISABLE_HURT"] = 188] = "DISABLE_HURT";
        PedConfigFlag[PedConfigFlag["PLAYER_IS_WEIRD"] = 189] = "PLAYER_IS_WEIRD";
        PedConfigFlag[PedConfigFlag["DO_NOTHING_WHEN_ON_FOOT_BY_DEFAULT"] = 193] = "DO_NOTHING_WHEN_ON_FOOT_BY_DEFAULT";
        PedConfigFlag[PedConfigFlag["USING_SCENARIO"] = 194] = "USING_SCENARIO";
        PedConfigFlag[PedConfigFlag["VISIBLE_ON_SCREEN"] = 195] = "VISIBLE_ON_SCREEN";
        PedConfigFlag[PedConfigFlag["DONT_ACTIVATE_RAGDOLL_ON_VEHICLE_COLLISION_WHEN_DEAD"] = 199] = "DONT_ACTIVATE_RAGDOLL_ON_VEHICLE_COLLISION_WHEN_DEAD";
        PedConfigFlag[PedConfigFlag["HAS_BEEN_IN_ARMED_COMBAT"] = 200] = "HAS_BEEN_IN_ARMED_COMBAT";
        PedConfigFlag[PedConfigFlag["AVOIDANCE_IGNORE_ALL"] = 202] = "AVOIDANCE_IGNORE_ALL";
        PedConfigFlag[PedConfigFlag["AVOIDANCE_IGNORED_BY_ALL"] = 203] = "AVOIDANCE_IGNORED_BY_ALL";
        PedConfigFlag[PedConfigFlag["AVOIDANCE_IGNORE_GROUP1"] = 204] = "AVOIDANCE_IGNORE_GROUP1";
        PedConfigFlag[PedConfigFlag["AVOIDANCE_MEMBER_OF_GROUP1"] = 205] = "AVOIDANCE_MEMBER_OF_GROUP1";
        PedConfigFlag[PedConfigFlag["FORCED_TO_USE_SPECIFIC_GROUP_SEAT_INDEX"] = 206] = "FORCED_TO_USE_SPECIFIC_GROUP_SEAT_INDEX";
        PedConfigFlag[PedConfigFlag["DISABLE_EXPLOSION_REACTIONS"] = 208] = "DISABLE_EXPLOSION_REACTIONS";
        PedConfigFlag[PedConfigFlag["DODGED_PLAYER"] = 209] = "DODGED_PLAYER";
        PedConfigFlag[PedConfigFlag["WAITING_FOR_PLAYER_CONTROL_INTERRUPT"] = 210] = "WAITING_FOR_PLAYER_CONTROL_INTERRUPT";
        PedConfigFlag[PedConfigFlag["FORCED_TO_STAY_IN_COVER"] = 211] = "FORCED_TO_STAY_IN_COVER";
        PedConfigFlag[PedConfigFlag["GENERATES_SOUND_EVENTS"] = 212] = "GENERATES_SOUND_EVENTS";
        PedConfigFlag[PedConfigFlag["LISTENS_TO_SOUND_EVENTS"] = 213] = "LISTENS_TO_SOUND_EVENTS";
        PedConfigFlag[PedConfigFlag["ALLOW_TO_BE_TARGETED_IN_A_VEHICLE"] = 214] = "ALLOW_TO_BE_TARGETED_IN_A_VEHICLE";
        PedConfigFlag[PedConfigFlag["WAIT_FOR_DIRECT_ENTRY_POINT_TO_BE_FREE_WHEN_EXITING"] = 215] = "WAIT_FOR_DIRECT_ENTRY_POINT_TO_BE_FREE_WHEN_EXITING";
        PedConfigFlag[PedConfigFlag["ONLY_REQUIRE_ONE_PRESS_TO_EXIT_VEHICLE"] = 216] = "ONLY_REQUIRE_ONE_PRESS_TO_EXIT_VEHICLE";
        PedConfigFlag[PedConfigFlag["FORCE_EXIT_TO_SKYDIVE"] = 217] = "FORCE_EXIT_TO_SKYDIVE";
        PedConfigFlag[PedConfigFlag["DONT_ENTER_LEADERS_VEHICLE"] = 220] = "DONT_ENTER_LEADERS_VEHICLE";
        PedConfigFlag[PedConfigFlag["DISABLE_EXIT_TO_SKYDIVE"] = 221] = "DISABLE_EXIT_TO_SKYDIVE";
        PedConfigFlag[PedConfigFlag["SHRINK"] = 223] = "SHRINK";
        PedConfigFlag[PedConfigFlag["MELEE_COMBAT"] = 224] = "MELEE_COMBAT";
        PedConfigFlag[PedConfigFlag["DISABLE_POTENTIAL_TO_BE_WALKED_INTO_RESPONSE"] = 225] = "DISABLE_POTENTIAL_TO_BE_WALKED_INTO_RESPONSE";
        PedConfigFlag[PedConfigFlag["DISABLE_PED_AVOIDANCE"] = 226] = "DISABLE_PED_AVOIDANCE";
        PedConfigFlag[PedConfigFlag["FORCE_RAGDOLL_UPON_DEATH"] = 227] = "FORCE_RAGDOLL_UPON_DEATH";
        PedConfigFlag[PedConfigFlag["DISABLE_PANIC_IN_VEHICLE"] = 229] = "DISABLE_PANIC_IN_VEHICLE";
        PedConfigFlag[PedConfigFlag["ALLOWED_TO_DETACH_TRAILER"] = 230] = "ALLOWED_TO_DETACH_TRAILER";
        PedConfigFlag[PedConfigFlag["IS_HOLDING_PROP"] = 236] = "IS_HOLDING_PROP";
        PedConfigFlag[PedConfigFlag["BLOCKS_PATHING_WHEN_DEAD"] = 237] = "BLOCKS_PATHING_WHEN_DEAD";
        PedConfigFlag[PedConfigFlag["FORCE_SKIN_CHARACTER_CLOTH"] = 240] = "FORCE_SKIN_CHARACTER_CLOTH";
        PedConfigFlag[PedConfigFlag["DISABLE_STOPPING_VEHICLE_ENGINE"] = 241] = "DISABLE_STOPPING_VEHICLE_ENGINE";
        PedConfigFlag[PedConfigFlag["PHONE_DISABLE_TEXTING_ANIMATIONS"] = 242] = "PHONE_DISABLE_TEXTING_ANIMATIONS";
        PedConfigFlag[PedConfigFlag["PHONE_DISABLE_TALKING_ANIMATIONS"] = 243] = "PHONE_DISABLE_TALKING_ANIMATIONS";
        PedConfigFlag[PedConfigFlag["PHONE_DISABLE_CAMERA_ANIMATIONS"] = 244] = "PHONE_DISABLE_CAMERA_ANIMATIONS";
        PedConfigFlag[PedConfigFlag["DISABLE_BLIND_FIRING_IN_SHOT_REACTIONS"] = 245] = "DISABLE_BLIND_FIRING_IN_SHOT_REACTIONS";
        PedConfigFlag[PedConfigFlag["ALLOW_NEARBY_COVER_USAGE"] = 246] = "ALLOW_NEARBY_COVER_USAGE";
        PedConfigFlag[PedConfigFlag["CAN_PLAY_IN_CAR_IDLES"] = 248] = "CAN_PLAY_IN_CAR_IDLES";
        PedConfigFlag[PedConfigFlag["CAN_ATTACK_NON_WANTED_PLAYER_AS_LAW"] = 249] = "CAN_ATTACK_NON_WANTED_PLAYER_AS_LAW";
        PedConfigFlag[PedConfigFlag["WILL_TAKE_DAMAGE_WHEN_VEHICLE_CRASHES"] = 250] = "WILL_TAKE_DAMAGE_WHEN_VEHICLE_CRASHES";
        PedConfigFlag[PedConfigFlag["AI_CAN_DRIVE_PLAYER_AS_REAR_PASSENGER"] = 251] = "AI_CAN_DRIVE_PLAYER_AS_REAR_PASSENGER";
        PedConfigFlag[PedConfigFlag["PLAYER_CAN_JACK_FRIENDLY_PLAYERS"] = 252] = "PLAYER_CAN_JACK_FRIENDLY_PLAYERS";
        PedConfigFlag[PedConfigFlag["IS_ON_STAIRS"] = 253] = "IS_ON_STAIRS";
        PedConfigFlag[PedConfigFlag["AI_DRIVER_ALLOW_FRIENDLY_PASSENGER_SEAT_ENTRY"] = 255] = "AI_DRIVER_ALLOW_FRIENDLY_PASSENGER_SEAT_ENTRY";
        PedConfigFlag[PedConfigFlag["ALLOW_MISSION_PED_TO_USE_INJURED_MOVEMENT"] = 257] = "ALLOW_MISSION_PED_TO_USE_INJURED_MOVEMENT";
        PedConfigFlag[PedConfigFlag["PREVENT_USING_LOWER_PRIORITY_SEATS"] = 261] = "PREVENT_USING_LOWER_PRIORITY_SEATS";
        PedConfigFlag[PedConfigFlag["DISABLE_CLOSING_VEHICLE_DOOR"] = 264] = "DISABLE_CLOSING_VEHICLE_DOOR";
        PedConfigFlag[PedConfigFlag["TELEPORT_TO_LEADER_VEHICLE"] = 268] = "TELEPORT_TO_LEADER_VEHICLE";
        PedConfigFlag[PedConfigFlag["AVOIDANCE_IGNORE_WEIRD_PED_BUFFER"] = 269] = "AVOIDANCE_IGNORE_WEIRD_PED_BUFFER";
        PedConfigFlag[PedConfigFlag["ON_STAIR_SLOPE"] = 270] = "ON_STAIR_SLOPE";
        PedConfigFlag[PedConfigFlag["DONT_BLIP_COP"] = 272] = "DONT_BLIP_COP";
        PedConfigFlag[PedConfigFlag["CLIMBED_SHIFTED_FENCE"] = 273] = "CLIMBED_SHIFTED_FENCE";
        PedConfigFlag[PedConfigFlag["KILL_WHEN_TRAPPED"] = 275] = "KILL_WHEN_TRAPPED";
        PedConfigFlag[PedConfigFlag["EDGE_DETECTED"] = 276] = "EDGE_DETECTED";
        PedConfigFlag[PedConfigFlag["AVOID_TEAR_GAS"] = 279] = "AVOID_TEAR_GAS";
        PedConfigFlag[PedConfigFlag["NO_WRITHE"] = 281] = "NO_WRITHE";
        PedConfigFlag[PedConfigFlag["ONLY_USE_FORCED_SEAT_WHEN_ENTERING_HELI_IN_GROUP"] = 282] = "ONLY_USE_FORCED_SEAT_WHEN_ENTERING_HELI_IN_GROUP";
        PedConfigFlag[PedConfigFlag["DISABLE_WEIRD_PED_EVENTS"] = 285] = "DISABLE_WEIRD_PED_EVENTS";
        PedConfigFlag[PedConfigFlag["SHOULD_CHARGE_NOW"] = 286] = "SHOULD_CHARGE_NOW";
        PedConfigFlag[PedConfigFlag["RAGDOLLING_ON_BOAT"] = 287] = "RAGDOLLING_ON_BOAT";
        PedConfigFlag[PedConfigFlag["HAS_BRANDISHED_WEAPON"] = 288] = "HAS_BRANDISHED_WEAPON";
        PedConfigFlag[PedConfigFlag["FREEZE_POSITION"] = 292] = "FREEZE_POSITION";
        PedConfigFlag[PedConfigFlag["DISABLE_SHOCKING_EVENTS"] = 294] = "DISABLE_SHOCKING_EVENTS";
        PedConfigFlag[PedConfigFlag["NEVER_REACT_TO_PED_ON_ROOF"] = 296] = "NEVER_REACT_TO_PED_ON_ROOF";
        PedConfigFlag[PedConfigFlag["DISABLE_SHOCKING_DRIVING_ON_PAVEMENT_EVENTS"] = 299] = "DISABLE_SHOCKING_DRIVING_ON_PAVEMENT_EVENTS";
        PedConfigFlag[PedConfigFlag["DISABLE_PED_CONSTRAINTS"] = 301] = "DISABLE_PED_CONSTRAINTS";
        PedConfigFlag[PedConfigFlag["FORCE_INITIAL_PEEK_IN_COVER"] = 302] = "FORCE_INITIAL_PEEK_IN_COVER";
        PedConfigFlag[PedConfigFlag["DISABLE_JUMPING_FROM_VEHICLES_AFTER_LEADER"] = 305] = "DISABLE_JUMPING_FROM_VEHICLES_AFTER_LEADER";
        PedConfigFlag[PedConfigFlag["IS_IN_CLUSTER"] = 310] = "IS_IN_CLUSTER";
        PedConfigFlag[PedConfigFlag["SHOUT_TO_GROUP_ON_PLAYER_MELEE"] = 311] = "SHOUT_TO_GROUP_ON_PLAYER_MELEE";
        PedConfigFlag[PedConfigFlag["IGNORED_BY_AUTO_OPEN_DOORS"] = 312] = "IGNORED_BY_AUTO_OPEN_DOORS";
        PedConfigFlag[PedConfigFlag["NO_PED_MELEE"] = 314] = "NO_PED_MELEE";
        PedConfigFlag[PedConfigFlag["CHECK_LOS_FOR_SOUND_EVENTS"] = 315] = "CHECK_LOS_FOR_SOUND_EVENTS";
        PedConfigFlag[PedConfigFlag["CAN_SAY_FOLLOWED_BY_PLAYER_AUDIO"] = 317] = "CAN_SAY_FOLLOWED_BY_PLAYER_AUDIO";
        PedConfigFlag[PedConfigFlag["ACTIVATE_RAGDOLL_FROM_MINOR_PLAYER_CONTACT"] = 318] = "ACTIVATE_RAGDOLL_FROM_MINOR_PLAYER_CONTACT";
        PedConfigFlag[PedConfigFlag["FORCE_POSE_CHARACTER_CLOTH"] = 320] = "FORCE_POSE_CHARACTER_CLOTH";
        PedConfigFlag[PedConfigFlag["HAS_CLOTH_COLLISION_BOUNDS"] = 321] = "HAS_CLOTH_COLLISION_BOUNDS";
        PedConfigFlag[PedConfigFlag["HAS_HIGH_HEELS"] = 322] = "HAS_HIGH_HEELS";
        PedConfigFlag[PedConfigFlag["DONT_BEHAVE_LIKE_LAW"] = 324] = "DONT_BEHAVE_LIKE_LAW";
        PedConfigFlag[PedConfigFlag["DISABLE_POLICE_INVESTIGATING_BODY"] = 326] = "DISABLE_POLICE_INVESTIGATING_BODY";
        PedConfigFlag[PedConfigFlag["DISABLE_WRITHE_SHOOT_FROM_GROUND"] = 327] = "DISABLE_WRITHE_SHOOT_FROM_GROUND";
        PedConfigFlag[PedConfigFlag["LOWER_PRIORITY_OF_WARP_SEATS"] = 328] = "LOWER_PRIORITY_OF_WARP_SEATS";
        PedConfigFlag[PedConfigFlag["DISABLE_TALK_TO"] = 329] = "DISABLE_TALK_TO";
        PedConfigFlag[PedConfigFlag["DONT_BLIP"] = 330] = "DONT_BLIP";
        PedConfigFlag[PedConfigFlag["IS_SWITCHING_WEAPON"] = 331] = "IS_SWITCHING_WEAPON";
        PedConfigFlag[PedConfigFlag["IGNORE_LEG_IK_RESTRICTIONS"] = 332] = "IGNORE_LEG_IK_RESTRICTIONS";
        PedConfigFlag[PedConfigFlag["ALLOW_TASK_DO_NOTHING_TIMESLICING"] = 339] = "ALLOW_TASK_DO_NOTHING_TIMESLICING";
        PedConfigFlag[PedConfigFlag["NOT_ALLOWED_TO_JACK_ANY_PLAYERS"] = 342] = "NOT_ALLOWED_TO_JACK_ANY_PLAYERS";
        PedConfigFlag[PedConfigFlag["ALWAYS_LEAVE_TRAIN_UPON_ARRIVAL"] = 345] = "ALWAYS_LEAVE_TRAIN_UPON_ARRIVAL";
        PedConfigFlag[PedConfigFlag["ONLY_WRITHE_FROM_WEAPON_DAMAGE"] = 347] = "ONLY_WRITHE_FROM_WEAPON_DAMAGE";
        PedConfigFlag[PedConfigFlag["USE_SLO_MO_BLOOD_VFX"] = 348] = "USE_SLO_MO_BLOOD_VFX";
        PedConfigFlag[PedConfigFlag["EQUIP_JETPACK"] = 349] = "EQUIP_JETPACK";
        PedConfigFlag[PedConfigFlag["PREVENT_DRAGGED_OUT_OF_CAR_THREAT_RESPONSE"] = 350] = "PREVENT_DRAGGED_OUT_OF_CAR_THREAT_RESPONSE";
        PedConfigFlag[PedConfigFlag["FORCE_DEEP_SURFACE_CHECK"] = 356] = "FORCE_DEEP_SURFACE_CHECK";
        PedConfigFlag[PedConfigFlag["DISABLE_DEEP_SURFACE_ANIMS"] = 357] = "DISABLE_DEEP_SURFACE_ANIMS";
        PedConfigFlag[PedConfigFlag["DONT_BLIP_NOT_SYNCED"] = 358] = "DONT_BLIP_NOT_SYNCED";
        PedConfigFlag[PedConfigFlag["IS_DUCKING_IN_VEHICLE"] = 359] = "IS_DUCKING_IN_VEHICLE";
        PedConfigFlag[PedConfigFlag["PREVENT_AUTO_SHUFFLE_TO_TURRET_SEAT"] = 360] = "PREVENT_AUTO_SHUFFLE_TO_TURRET_SEAT";
        PedConfigFlag[PedConfigFlag["DISABLE_EVENT_INTERIOR_STATUS_CHECK"] = 361] = "DISABLE_EVENT_INTERIOR_STATUS_CHECK";
        PedConfigFlag[PedConfigFlag["HAS_RESERVE_PARACHUTE"] = 362] = "HAS_RESERVE_PARACHUTE";
        PedConfigFlag[PedConfigFlag["USE_RESERVE_PARACHUTE"] = 363] = "USE_RESERVE_PARACHUTE";
        PedConfigFlag[PedConfigFlag["TREAT_DISLIKE_AS_HATE_WHEN_IN_COMBAT"] = 364] = "TREAT_DISLIKE_AS_HATE_WHEN_IN_COMBAT";
        PedConfigFlag[PedConfigFlag["ONLY_UPDATE_TARGET_WANTED_IF_SEEN"] = 365] = "ONLY_UPDATE_TARGET_WANTED_IF_SEEN";
        PedConfigFlag[PedConfigFlag["ALLOW_AUTO_SHUFFLE_TO_DRIVERS_SEAT"] = 366] = "ALLOW_AUTO_SHUFFLE_TO_DRIVERS_SEAT";
        PedConfigFlag[PedConfigFlag["PREVENT_REACTING_TO_SILENCED_CLONE_BULLETS"] = 372] = "PREVENT_REACTING_TO_SILENCED_CLONE_BULLETS";
        PedConfigFlag[PedConfigFlag["DISABLE_INJURED_CRY_FOR_HELP_EVENTS"] = 373] = "DISABLE_INJURED_CRY_FOR_HELP_EVENTS";
        PedConfigFlag[PedConfigFlag["NEVER_LEAVE_TRAIN"] = 374] = "NEVER_LEAVE_TRAIN";
        PedConfigFlag[PedConfigFlag["DONT_DROP_JETPACK_ON_DEATH"] = 375] = "DONT_DROP_JETPACK_ON_DEATH";
        PedConfigFlag[PedConfigFlag["DISABLE_AUTO_EQUIP_HELMETS_IN_BIKES"] = 380] = "DISABLE_AUTO_EQUIP_HELMETS_IN_BIKES";
        PedConfigFlag[PedConfigFlag["IS_CLIMBING_LADDER"] = 388] = "IS_CLIMBING_LADDER";
        PedConfigFlag[PedConfigFlag["HAS_BARE_FEET"] = 389] = "HAS_BARE_FEET";
        PedConfigFlag[PedConfigFlag["GO_ON_WITHOUT_VEHICLE_IF_IT_IS_UNABLE_TO_GET_BACK_TO_ROAD"] = 391] = "GO_ON_WITHOUT_VEHICLE_IF_IT_IS_UNABLE_TO_GET_BACK_TO_ROAD";
        PedConfigFlag[PedConfigFlag["BLOCK_DROPPING_HEALTH_SNACKS_ON_DEATH"] = 392] = "BLOCK_DROPPING_HEALTH_SNACKS_ON_DEATH";
        PedConfigFlag[PedConfigFlag["FORCE_THREAT_RESPONSE_TO_NON_FRIEND_TO_FRIEND_MELEE_ACTIONS"] = 394] = "FORCE_THREAT_RESPONSE_TO_NON_FRIEND_TO_FRIEND_MELEE_ACTIONS";
        PedConfigFlag[PedConfigFlag["DONT_RESPOND_TO_RANDOM_PEDS_DAMAGE"] = 395] = "DONT_RESPOND_TO_RANDOM_PEDS_DAMAGE";
        PedConfigFlag[PedConfigFlag["ALLOW_CONTINUOUS_THREAT_RESPONSE_WANTED_LEVEL_UPDATES"] = 396] = "ALLOW_CONTINUOUS_THREAT_RESPONSE_WANTED_LEVEL_UPDATES";
        PedConfigFlag[PedConfigFlag["KEEP_TARGET_LOSS_RESPONSE_ON_CLEANUP"] = 397] = "KEEP_TARGET_LOSS_RESPONSE_ON_CLEANUP";
        PedConfigFlag[PedConfigFlag["PLAYERS_DONT_DRAG_ME_OUT_OF_CAR"] = 398] = "PLAYERS_DONT_DRAG_ME_OUT_OF_CAR";
        PedConfigFlag[PedConfigFlag["BROADCAST_RESPONDED_TO_THREAT_WHEN_GOING_TO_POINT_SHOOTING"] = 399] = "BROADCAST_RESPONDED_TO_THREAT_WHEN_GOING_TO_POINT_SHOOTING";
        PedConfigFlag[PedConfigFlag["IGNORE_PED_TYPE_FOR_IS_FRIENDLY_WITH"] = 400] = "IGNORE_PED_TYPE_FOR_IS_FRIENDLY_WITH";
        PedConfigFlag[PedConfigFlag["TREAT_NON_FRIENDLY_AS_HATE_WHEN_IN_COMBAT"] = 401] = "TREAT_NON_FRIENDLY_AS_HATE_WHEN_IN_COMBAT";
        PedConfigFlag[PedConfigFlag["DONT_LEAVE_VEHICLE_IF_LEADER_NOT_IN_VEHICLE"] = 402] = "DONT_LEAVE_VEHICLE_IF_LEADER_NOT_IN_VEHICLE";
        PedConfigFlag[PedConfigFlag["ALLOW_MELEE_REACTION_IF_MELEE_PROOF_IS_ON"] = 404] = "ALLOW_MELEE_REACTION_IF_MELEE_PROOF_IS_ON";
        PedConfigFlag[PedConfigFlag["USE_NORMAL_EXPLOSION_DAMAGE_WHEN_BLOWN_UP_IN_VEHICLE"] = 407] = "USE_NORMAL_EXPLOSION_DAMAGE_WHEN_BLOWN_UP_IN_VEHICLE";
        PedConfigFlag[PedConfigFlag["DISABLE_HOMING_MISSILE_LOCK_FOR_VEHICLE_PED_INSIDE"] = 408] = "DISABLE_HOMING_MISSILE_LOCK_FOR_VEHICLE_PED_INSIDE";
        PedConfigFlag[PedConfigFlag["DISABLE_TAKE_OFF_SCUBA_GEAR"] = 409] = "DISABLE_TAKE_OFF_SCUBA_GEAR";
        PedConfigFlag[PedConfigFlag["ALPHA"] = 410] = "ALPHA";
        PedConfigFlag[PedConfigFlag["LAW_PEDS_CAN_FLEE_FROM_NON_WANTED_PLAYER"] = 411] = "LAW_PEDS_CAN_FLEE_FROM_NON_WANTED_PLAYER";
        PedConfigFlag[PedConfigFlag["FORCE_BLIP_SECURITY_PEDS_IF_PLAYER_IS_WANTED"] = 412] = "FORCE_BLIP_SECURITY_PEDS_IF_PLAYER_IS_WANTED";
        PedConfigFlag[PedConfigFlag["IS_HOLSTERING_WEAPON"] = 413] = "IS_HOLSTERING_WEAPON";
        PedConfigFlag[PedConfigFlag["USE_GO_TO_POINT_FOR_SCENARIO_NAVIGATION"] = 414] = "USE_GO_TO_POINT_FOR_SCENARIO_NAVIGATION";
        PedConfigFlag[PedConfigFlag["DONT_CLEAR_LOCAL_PASSENGERS_WANTED_LEVEL"] = 415] = "DONT_CLEAR_LOCAL_PASSENGERS_WANTED_LEVEL";
        PedConfigFlag[PedConfigFlag["BLOCK_AUTO_SWAP_ON_WEAPON_PICKUPS"] = 416] = "BLOCK_AUTO_SWAP_ON_WEAPON_PICKUPS";
        PedConfigFlag[PedConfigFlag["THIS_PED_IS_A_TARGET_PRIORITY_FOR_AI"] = 417] = "THIS_PED_IS_A_TARGET_PRIORITY_FOR_AI";
        PedConfigFlag[PedConfigFlag["IS_SWITCHING_HELMET_VISOR"] = 418] = "IS_SWITCHING_HELMET_VISOR";
        PedConfigFlag[PedConfigFlag["FORCE_HELMET_VISOR_SWITCH"] = 419] = "FORCE_HELMET_VISOR_SWITCH";
        PedConfigFlag[PedConfigFlag["FLAMING_FOOTPRINTS"] = 421] = "FLAMING_FOOTPRINTS";
        PedConfigFlag[PedConfigFlag["DISABLE_VEHICLE_COMBAT"] = 422] = "DISABLE_VEHICLE_COMBAT";
        PedConfigFlag[PedConfigFlag["DISABLE_PROP_KNOCK_OFF"] = 423] = "DISABLE_PROP_KNOCK_OFF";
        PedConfigFlag[PedConfigFlag["FALLS_LIKE_AIRCRAFT"] = 424] = "FALLS_LIKE_AIRCRAFT";
        PedConfigFlag[PedConfigFlag["USE_LOCKPICK_VEHICLE_ENTRY_ANIMATIONS"] = 426] = "USE_LOCKPICK_VEHICLE_ENTRY_ANIMATIONS";
        PedConfigFlag[PedConfigFlag["IGNORE_INTERIOR_CHECK_FOR_SPRINTING"] = 427] = "IGNORE_INTERIOR_CHECK_FOR_SPRINTING";
        PedConfigFlag[PedConfigFlag["SWAT_HELI_SPAWN_WITHIN_LAST_SPOTTED_LOCATION"] = 428] = "SWAT_HELI_SPAWN_WITHIN_LAST_SPOTTED_LOCATION";
        PedConfigFlag[PedConfigFlag["DISABLE_STARTING_VEHICLE_ENGINE"] = 429] = "DISABLE_STARTING_VEHICLE_ENGINE";
        PedConfigFlag[PedConfigFlag["IGNORE_BEING_ON_FIRE"] = 430] = "IGNORE_BEING_ON_FIRE";
        PedConfigFlag[PedConfigFlag["DISABLE_TURRET_OR_REAR_SEAT_PREFERENCE"] = 431] = "DISABLE_TURRET_OR_REAR_SEAT_PREFERENCE";
        PedConfigFlag[PedConfigFlag["DISABLE_WANTED_HELICOPTER_SPAWNING"] = 432] = "DISABLE_WANTED_HELICOPTER_SPAWNING";
        PedConfigFlag[PedConfigFlag["USE_TARGET_PERCEPTION_FOR_CREATING_AIMED_AT_EVENTS"] = 433] = "USE_TARGET_PERCEPTION_FOR_CREATING_AIMED_AT_EVENTS";
        PedConfigFlag[PedConfigFlag["DISABLE_HOMING_MISSILE_LOCKON"] = 434] = "DISABLE_HOMING_MISSILE_LOCKON";
        PedConfigFlag[PedConfigFlag["FORCE_IGNORE_MAX_MELEE_ACTIVE_SUPPORT_COMBATANTS"] = 435] = "FORCE_IGNORE_MAX_MELEE_ACTIVE_SUPPORT_COMBATANTS";
        PedConfigFlag[PedConfigFlag["STAY_IN_DEFENSIVE_AREA_WHEN_IN_VEHICLE"] = 436] = "STAY_IN_DEFENSIVE_AREA_WHEN_IN_VEHICLE";
        PedConfigFlag[PedConfigFlag["DONT_SHOUT_TARGET_POSITION"] = 437] = "DONT_SHOUT_TARGET_POSITION";
        PedConfigFlag[PedConfigFlag["DISABLE_HELMET_ARMOR"] = 438] = "DISABLE_HELMET_ARMOR";
        PedConfigFlag[PedConfigFlag["PREVENT_VEH_EXIT_DUE_TO_INVALID_WEAPON"] = 441] = "PREVENT_VEH_EXIT_DUE_TO_INVALID_WEAPON";
        PedConfigFlag[PedConfigFlag["IGNORE_NET_SESSION_FRIENDLY_FIRE_CHECK_FOR_ALLOW_DAMAGE"] = 442] = "IGNORE_NET_SESSION_FRIENDLY_FIRE_CHECK_FOR_ALLOW_DAMAGE";
        PedConfigFlag[PedConfigFlag["DONT_LEAVE_COMBAT_IF_TARGET_PLAYER_IS_ATTACKED_BY_POLICE"] = 443] = "DONT_LEAVE_COMBAT_IF_TARGET_PLAYER_IS_ATTACKED_BY_POLICE";
        PedConfigFlag[PedConfigFlag["CHECK_LOCKED_BEFORE_WARP"] = 444] = "CHECK_LOCKED_BEFORE_WARP";
        PedConfigFlag[PedConfigFlag["DONT_SHUFFLE_IN_VEHICLE_TO_MAKE_ROOM"] = 445] = "DONT_SHUFFLE_IN_VEHICLE_TO_MAKE_ROOM";
        PedConfigFlag[PedConfigFlag["GIVE_WEAPON_ON_GETUP"] = 446] = "GIVE_WEAPON_ON_GETUP";
        PedConfigFlag[PedConfigFlag["DONT_HIT_VEHICLE_WITH_PROJECTILES"] = 447] = "DONT_HIT_VEHICLE_WITH_PROJECTILES";
        PedConfigFlag[PedConfigFlag["DISABLE_FORCED_ENTRY_FOR_OPEN_VEHICLES_FROM_TRY_LOCKED_DOOR"] = 448] = "DISABLE_FORCED_ENTRY_FOR_OPEN_VEHICLES_FROM_TRY_LOCKED_DOOR";
        PedConfigFlag[PedConfigFlag["FIRES_DUMMY_ROCKETS"] = 449] = "FIRES_DUMMY_ROCKETS";
        PedConfigFlag[PedConfigFlag["IS_ARRESTING"] = 450] = "IS_ARRESTING";
        PedConfigFlag[PedConfigFlag["IS_DECOY_PED"] = 451] = "IS_DECOY_PED";
        PedConfigFlag[PedConfigFlag["HAS_ESTABLISHED_DECOY"] = 452] = "HAS_ESTABLISHED_DECOY";
        PedConfigFlag[PedConfigFlag["BLOCK_DISPATCHED_HELICOPTERS_FROM_LANDING"] = 453] = "BLOCK_DISPATCHED_HELICOPTERS_FROM_LANDING";
        PedConfigFlag[PedConfigFlag["DONT_CRY_FOR_HELP_ON_STUN"] = 454] = "DONT_CRY_FOR_HELP_ON_STUN";
        PedConfigFlag[PedConfigFlag["CAN_BE_INCAPACITATED"] = 456] = "CAN_BE_INCAPACITATED";
        PedConfigFlag[PedConfigFlag["MUTABLE_FORCED_AIM"] = 457] = "MUTABLE_FORCED_AIM";
        PedConfigFlag[PedConfigFlag["DONT_CHANGE_TARGET_FROM_MELEE"] = 458] = "DONT_CHANGE_TARGET_FROM_MELEE";
    })(PedConfigFlag || (PedConfigFlag = {}));
})(Enums || (Enums = {}));
