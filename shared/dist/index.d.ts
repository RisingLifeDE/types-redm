/**
 * @module @risinglife/redm-shared
 */
export declare class VectorBase<T extends VectorBase<T>> {
    protected components: number[];
    toArray(): number[];
    toFixed(digits?: number): T;
    get length(): number;
    get lengthSquared(): number;
    get negative(): T;
    get inverse(): T;
    get normalized(): T;
    toDegrees(): T;
    toRadians(): T;
    protected createInstance(...components: number[]): T;
}
export interface IVector2 {
    x: number;
    y: number;
}
export declare class Vector2 extends VectorBase<Vector2> {
    readonly x: number;
    readonly y: number;
    constructor(x: number, y: number);
    constructor(xy: [number, number]);
    constructor(xy: IVector2);
    createInstance(...components: number[]): Vector2;
    add(x: number, y: number): Vector2;
    add(other: Vector2): Vector2;
    add(xy: [number, number]): Vector2;
    add(xy: IVector2): Vector2;
    add(xy: number): Vector2;
    sub(x: number, y: number): Vector2;
    sub(other: Vector2): Vector2;
    sub(xy: [number, number]): Vector2;
    sub(xy: IVector2): Vector2;
    sub(xy: number): Vector2;
    mul(x: number, y: number): Vector2;
    mul(other: Vector2): Vector2;
    mul(xy: [number, number]): Vector2;
    mul(xy: IVector2): Vector2;
    mul(xy: number): Vector2;
    div(x: number, y: number): Vector2;
    div(other: Vector2): Vector2;
    div(xy: [number, number]): Vector2;
    div(xy: IVector2): Vector2;
    div(xy: number): Vector2;
    dot(x: number, y: number): number;
    dot(other: Vector2): number;
    dot(xy: [number, number]): number;
    dot(xy: IVector2): number;
    dot(xy: number): number;
    distanceTo(x: number, y: number): number;
    distanceTo(other: Vector2): number;
    distanceTo(xy: [number, number]): number;
    distanceTo(xy: IVector2): number;
    distanceToSquared(x: number, y: number): number;
    distanceToSquared(other: Vector2): number;
    distanceToSquared(xy: [number, number]): number;
    distanceToSquared(xy: IVector2): number;
    angleTo(x: number, y: number): number;
    angleTo(other: Vector2): number;
    angleTo(xy: [number, number]): number;
    angleTo(xy: IVector2): number;
    angleToDegrees(x: number, y: number): number;
    angleToDegrees(other: Vector2): number;
    angleToDegrees(xy: [number, number]): number;
    angleToDegrees(xy: IVector2): number;
    isInRange(range: number, x: number, y: number): boolean;
    isInRange(range: number, other: Vector2): boolean;
    isInRange(range: number, xy: [number, number]): boolean;
    isInRange(range: number, xy: IVector2): boolean;
    lerp(ratio: number, x: number, y: number): Vector2;
    lerp(ratio: number, other: Vector2): Vector2;
    lerp(ratio: number, xy: [number, number]): Vector2;
    lerp(ratio: number, xy: IVector2): Vector2;
    toArray(): [number, number];
    static zero: Vector2;
    static one: Vector2;
    static up: Vector2;
    static down: Vector2;
    static left: Vector2;
    static right: Vector2;
    static negativeInfinity: Vector2;
    static positiveInfinity: Vector2;
    static fromArray(xy: [number, number]): Vector2;
    static fromObject(xy: IVector2): Vector2;
    private getXY;
}
export interface IVector3 {
    x: number;
    y: number;
    z: number;
}
export declare class Vector3 extends VectorBase<Vector3> {
    readonly x: number;
    readonly y: number;
    readonly z: number;
    constructor(x: number, y: number, z: number);
    constructor(xyz: number[]);
    constructor(xyz: [number, number, number]);
    constructor(xyz: IVector3);
    createInstance(...components: number[]): Vector3;
    add(x: number, y: number, z: number): Vector3;
    add(other: Vector3): Vector3;
    add(xyz: [number, number, number]): Vector3;
    add(xyz: IVector3): Vector3;
    add(xyz: number): Vector3;
    sub(x: number, y: number, z: number): Vector3;
    sub(other: Vector3): Vector3;
    sub(xyz: [number, number, number]): Vector3;
    sub(xyz: IVector3): Vector3;
    sub(xyz: number): Vector3;
    mul(x: number, y: number, z: number): Vector3;
    mul(other: Vector3): Vector3;
    mul(xyz: [number, number, number]): Vector3;
    mul(xyz: IVector3): Vector3;
    mul(xyz: number): Vector3;
    div(x: number, y: number, z: number): Vector3;
    div(other: Vector3): Vector3;
    div(xyz: [number, number, number]): Vector3;
    div(xyz: IVector3): Vector3;
    div(xyz: number): Vector3;
    dot(x: number, y: number, z: number): number;
    dot(other: Vector3): number;
    dot(xyz: [number, number, number]): number;
    dot(xyz: IVector3): number;
    dot(xyz: number): number;
    cross(x: number, y: number, z: number): Vector3;
    cross(other: Vector3): Vector3;
    cross(xyz: [number, number, number]): Vector3;
    cross(xyz: IVector3): Vector3;
    distanceTo(x: number, y: number, z: number): number;
    distanceTo(other: Vector3): number;
    distanceTo(xyz: [number, number, number]): number;
    distanceTo(xyz: IVector3): number;
    distanceToSquared(x: number, y: number, z: number): number;
    distanceToSquared(other: Vector3): number;
    distanceToSquared(xyz: [number, number, number]): number;
    distanceToSquared(xyz: IVector3): number;
    angleTo(x: number, y: number, z: number): number;
    angleTo(other: Vector3): number;
    angleTo(xyz: [number, number, number]): number;
    angleTo(xyz: IVector3): number;
    angleToDegrees(x: number, y: number, z: number): number;
    angleToDegrees(other: Vector3): number;
    angleToDegrees(xyz: [number, number, number]): number;
    angleToDegrees(xyz: IVector3): number;
    isInRange(range: number, x: number, y: number, z: number): boolean;
    isInRange(range: number, other: Vector3): boolean;
    isInRange(range: number, xyz: [number, number, number]): boolean;
    isInRange(range: number, xyz: IVector3): boolean;
    lerp(ratio: number, x: number, y: number, z: number): Vector3;
    lerp(ratio: number, other: Vector3): Vector3;
    lerp(ratio: number, xyz: [number, number, number]): Vector3;
    lerp(ratio: number, xyz: IVector3): Vector3;
    toArray(): [number, number, number];
    static zero: Vector3;
    static one: Vector3;
    static back: Vector3;
    static up: Vector3;
    static down: Vector3;
    static forward: Vector3;
    static left: Vector3;
    static right: Vector3;
    static negativeInfinity: Vector3;
    static positiveInfinity: Vector3;
    static fromArray(xyz: [number, number, number]): Vector3;
    static fromObject(xyz: IVector3): Vector3;
    private getXYZ;
}
export declare abstract class Entity {
    abstract handle(): number;
    abstract remoteId(): number;
}
export declare abstract class Ped extends Entity {
}
export declare abstract class Player extends Entity {
}
export declare abstract class Vehicle extends Entity {
}
declare type Handle = number;
declare type Hash = number;
declare type HashOrString = Hash | string;
declare type Array2d = [number, number];
declare type Array3d = [number, number, number];
declare type Array4d = [number, number, number, number];
export declare namespace Enums {
    enum ColShapeType {
        SPHERE = 0,
        CYLINDER = 1,
        CIRCLE = 2,
        CUBOID = 3,
        RECT = 4,
        CHECKPOINT_CYLINDER = 5,
        POLYGON = 6
    }
    enum KeyCode {
        KEY0 = 48,
        KEY1 = 49,
        KEY2 = 50,
        KEY3 = 51,
        KEY4 = 52,
        KEY5 = 53,
        KEY6 = 54,
        KEY7 = 55,
        KEY8 = 56,
        KEY9 = 57,
        BACKSPACE = 8,
        TAB = 9,
        CLEAR = 12,
        ENTER = 13,
        RETURN = 13,
        ESCAPE = 27,
        SPACE = 32,
        LEFT = 37,
        UP = 38,
        RIGHT = 39,
        DOWN = 40,
        DELETE = 46,
        INSERT = 45,
        HOME = 36,
        END = 35,
        PAGE_UP = 33,
        PAGE_DOWN = 34,
        CAPS_LOCK = 20,
        SHIFT = 16,
        ALT = 18,
        CTRL = 17,
        '-' = 189,
        '=' = 187,
        ',' = 188,
        ';' = 186,
        '.' = 190,
        '/' = 191,
        '`' = 192,
        '~' = 192,
        "'" = 222,
        '[' = 219,
        ']' = 221,
        '\\' = 220,
        KP_MULTIPLY = 106,
        KP_ADD = 107,
        KP_SUBTRACT = 109,
        KP_DECIMAL = 110,
        KP_DIVIDE = 111,
        A = 65,
        B = 66,
        C = 67,
        D = 68,
        E = 69,
        F = 70,
        G = 71,
        H = 72,
        I = 73,
        J = 74,
        K = 75,
        L = 76,
        M = 77,
        N = 78,
        O = 79,
        P = 80,
        Q = 81,
        R = 82,
        S = 83,
        T = 84,
        U = 85,
        V = 86,
        W = 87,
        X = 88,
        Y = 89,
        Z = 90,
        F1 = 112,
        F2 = 113,
        F3 = 114,
        F4 = 115,
        F5 = 116,
        F6 = 117,
        F7 = 118,
        F8 = 119,
        F9 = 120,
        F10 = 121,
        F11 = 122,
        F12 = 123,
        F13 = 124,
        F14 = 125,
        F15 = 126,
        F16 = 127,
        F17 = 128,
        F18 = 129,
        F19 = 130,
        F20 = 131,
        NUMPAD0 = 96,
        NUMPAD1 = 97,
        NUMPAD2 = 98,
        NUMPAD3 = 99,
        NUMPAD4 = 100,
        NUMPAD5 = 101,
        NUMPAD6 = 102,
        NUMPAD7 = 103,
        NUMPAD8 = 104,
        NUMPAD9 = 105,
        MOUSE_LEFT = 1,
        MOUSE_RIGHT = 2,
        MOUSE_MIDDLE = 4
    }
    enum WeatherType {
        SUNNY = 0,
        MISTY = 1,
        FOG = 2,
        CLOUDS = 3,
        OVERCAST = 4,
        OVERCASTDARK = 5,
        DRIZZLE = 6,
        RAIN = 7,
        THUNDER = 8,
        THUNDERSTORM = 9,
        HURRICANE = 10,
        HIGHPRESSURE = 11,
        SHOWER = 12,
        HAIL = 13,
        SLEET = 14,
        SNOWCLEARING = 15,
        SNOWLIGHT = 16,
        SNOW = 17,
        BLIZZARD = 18,
        GROUNDBLIZZARD = 19,
        WHITEOUT = 20,
        SANDSTORM = 21
    }
    enum BaseObjectType {
        PLAYER = 0,
        VEHICLE = 1,
        PED = 2,
        OBJECT = 3,
        BLIP = 4,
        WEBVIEW = 5,
        VOICE_CHANNEL = 6,
        COLSHAPE = 7,
        CHECKPOINT = 8,
        WEBSOCKET_CLIENT = 9,
        HTTP_CLIENT = 10,
        AUDIO = 11,
        AUDIO_OUTPUT = 12,
        AUDIO_OUTPUT_WORLD = 13,
        AUDIO_OUTPUT_ATTACHED = 14,
        AUDIO_OUTPUT_FRONTEND = 15,
        RML_ELEMENT = 16,
        RML_DOCUMENT = 17,
        LOCAL_PLAYER = 18,
        LOCAL_OBJECT = 19,
        VIRTUAL_ENTITY = 20,
        VIRTUAL_ENTITY_GROUP = 21,
        MARKER = 22,
        TEXT_LABEL = 23,
        LOCAL_PED = 24,
        LOCAL_VEHICLE = 25,
        AUDIO_FILTER = 26,
        FONT = 29,
        SIZE = 30
    }
    enum ExplosionType {
        GRENADE = 0,
        GRENADELAUNCHER = 1,
        STICKYBOMB = 2,
        MOLOTOV = 3,
        ROCKET = 4,
        TANKSHELL = 5,
        HI_OCTANE = 6,
        CAR = 7,
        PLANE = 8,
        PETROL_PUMP = 9,
        BIKE = 10,
        DIR_STEAM = 11,
        DIR_FLAME = 12,
        DIR_WATER_HYDRANT = 13,
        DIR_GAS_CANISTER = 14,
        BOAT = 15,
        SHIP_DESTROY = 16,
        TRUCK = 17,
        BULLET = 18,
        SMOKEGRENADELAUNCHER = 19,
        SMOKEGRENADE = 20,
        BZGAS = 21,
        FLARE = 22,
        GAS_CANISTER = 23,
        EXTINGUISHER = 24,
        PROGRAMMABLEAR = 25,
        TRAIN = 26,
        BARREL = 27,
        PROPANE = 28,
        BLIMP = 29,
        DIR_FLAME_EXPLODE = 30,
        TANKER = 31,
        PLANE_ROCKET = 32,
        VEHICLE_BULLET = 33,
        GAS_TANK = 34,
        FIREWORK = 35,
        SNOWBALL = 36,
        PROXMINE = 37,
        VALKYRIE_CANNON = 38,
        UNKNOWN = -1
    }
    enum VehicleModelType {
        INVALID = 0,
        PED = 1,
        AUTOMOBILE = 2,
        PLANE = 3,
        TRAILER = 4,
        QUAD_BIKE = 5,
        SUBMARINE_CAR = 6,
        AMPHIBIOUS_AUTOMOBILE = 7,
        AMPHIBIOUS_QUAD_BIKE = 8,
        HELI = 9,
        BLIMP = 10,
        AUTOGYRO = 11,
        BIKE = 12,
        BMX = 13,
        BOAT = 14,
        TRAIN = 15,
        SUBMARINE = 16,
        OBJECT = 17
    }
    enum BodyPart {
        PELVIS = 0,
        LEFT_HIP = 1,
        LEFT_LEG = 2,
        LEFT_FOOT = 3,
        RIGHT_HIP = 4,
        RIGHT_LEG = 5,
        RIGHT_FOOT = 6,
        LOWER_TORSO = 7,
        UPPER_TORSO = 8,
        CHEST = 9,
        UNDER_NECK = 10,
        LEFT_SHOULDER = 11,
        LEFT_UPPER_ARM = 12,
        LEFT_ELBOW = 13,
        LEFT_WRIST = 14,
        RIGHT_SHOULDER = 15,
        RIGHT_UPPER_ARM = 16,
        RIGHT_ELBOW = 17,
        RIGHT_WRIST = 18,
        NECK = 19,
        HEAD = 20,
        UNKNOWN = -1
    }
    enum KeyState {
        UP = 0,
        DOWN = 1
    }
    enum GameFont {
        CHALET_LONDON = 0,
        HOUSE_SCRIPT = 1,
        MONOSPACE = 2,
        CHARLET_COMPRIME_COLONGE = 4,
        PRICEDOWN = 7
    }
    enum TextAlign {
        CENTER = 0,
        LEFT = 1,
        RIGHT = 2
    }
    enum WebSocketReadyState {
        CONNECTING = 0,
        OPEN = 1,
        CLOSING = 2,
        CLOSED = 3
    }
    enum ConfigFlag {
        DISABLE_AUTO_WEAPON_SWAP = "DISABLE_AUTO_WEAPON_SWAP",
        DISABLE_PED_PROP_KNOCK_OFF = "DISABLE_PED_PROP_KNOCK_OFF",
        DISABLE_IDLE_CAMERA = "DISABLE_IDLE_CAMERA",
        DISABLE_VEHICLE_ENGINE_SHUTDOWN_ON_LEAVE = "DISABLE_VEHICLE_ENGINE_SHUTDOWN_ON_LEAVE",
        DISABLE_SP_ENTER_VEHICLE_CLIPSET = "DISABLE_SP_ENTER_VEHICLE_CLIPSET",
        FORCE_RENDER_SNOW = "FORCE_RENDER_SNOW",
        FORCE_HIDE_NIGHT_PROPS = "FORCE_HIDE_NIGHT_PROPS",
        FORCE_SHOW_NIGHT_PROPS = "FORCE_SHOW_NIGHT_PROPS",
        DISABLE_EMISSIVE_LIGHTS_RENDERING = "DISABLE_EMISSIVE_LIGHTS_RENDERING"
    }
    enum TimerType {
        TIMER = 0,
        INTERVAL = 1,
        TIMEOUT = 2,
        EVERY_TICK = 3,
        NEXT_TICK = 4
    }
    enum BaseObjectFilterType {
        PLAYER = 1,
        VEHICLE = 2,
        PED = 4,
        OBJECT = 8
    }
    enum PedConfigFlag {
        NO_CRITICAL_HITS = 2,
        DROWNS_IN_WATER = 3,
        DISABLE_RETICULE_FIXED_LOCKON = 4,
        UPPER_BODY_DAMAGE_ANIMS_ONLY = 7,
        NEVER_LEAVES_GROUP = 13,
        BLOCK_NON_TEMPORARY_EVENTS = 17,
        CAN_PUNCH = 18,
        IGNORE_SEEN_MELEE = 24,
        GET_OUT_UNDRIVEABLE_VEHICLE = 29,
        CAN_FLY_THRU_WINDSCREEN = 32,
        DIES_WHEN_RAGDOLL = 33,
        HAS_HELMET = 34,
        PUT_ON_MOTORCYCLE_HELMET = 35,
        DONT_TAKE_OFF_HELMET = 36,
        DISABLE_EVASIVE_DIVES = 39,
        DONT_INFLUENCE_WANTED_LEVEL = 42,
        DISABLE_PLAYER_LOCKON = 43,
        DISABLE_LOCKON_TO_RANDOM_PEDS = 44,
        ALLOW_LOCKON_TO_FRIENDLY_PLAYERS = 45,
        BEING_DELETED = 47,
        BLOCK_WEAPON_SWITCHING = 48,
        NO_COLLISION = 52,
        IS_SHOOTING = 58,
        WAS_SHOOTING = 59,
        IS_ON_GROUND = 60,
        WAS_ON_GROUND = 61,
        IN_VEHICLE = 62,
        ON_MOUNT = 63,
        ATTACHED_TO_VEHICLE = 64,
        IS_SWIMMING = 65,
        WAS_SWIMMING = 66,
        IS_SKIING = 67,
        IS_SITTING = 68,
        KILLED_BY_STEALTH = 69,
        KILLED_BY_TAKEDOWN = 70,
        KNOCKEDOUT = 71,
        IS_SNIPER_SCOPE_ACTIVE = 72,
        SUPER_DEAD = 73,
        USING_COVER_POINT = 75,
        IS_IN_THE_AIR = 76,
        IS_AIMING_GUN = 78,
        FORCE_PED_LOAD_COVER = 93,
        VAULT_FROM_COVER = 97,
        IS_DRUNK = 100,
        FORCED_AIM = 101,
        IS_NOT_RAGDOLL_AND_NOT_PLAYING_ANIM = 104,
        FORCE_RELOAD = 105,
        DONT_ACTIVATE_RAGDOLL_FROM_VEHICLE_IMPACT = 106,
        DONT_ACTIVATE_RAGDOLL_FROM_BULLET_IMPACT = 107,
        DONT_ACTIVATE_RAGDOLL_FROM_EXPLOSIONS = 108,
        DONT_ACTIVATE_RAGDOLL_FROM_FIRE = 109,
        DONT_ACTIVATE_RAGDOLL_FROM_ELECTROCUTION = 110,
        KEEP_WEAPON_HOLSTERED_UNLESS_FIRED = 113,
        GET_OUT_BURNING_VEHICLE = 116,
        BUMPED_BY_PLAYER = 117,
        RUN_FROM_FIRES_AND_EXPLOSIONS = 118,
        TREAT_AS_PLAYER_DURING_TARGETING = 119,
        IS_HAND_CUFFED = 120,
        IS_ANKLE_CUFFED = 121,
        DISABLE_MELEE = 122,
        DISABLE_UNARMED_DRIVEBYS = 123,
        JUST_GETS_PULLED_OUT_WHEN_ELECTROCUTED = 124,
        NM_MESSAGE_466 = 125,
        WILL_NOT_HOTWIRE_LAW_ENFORCEMENT_VEHICLE = 126,
        WILL_COMMANDEER_RATHER_THAN_JACK = 127,
        CAN_BE_AGITATED = 128,
        FORCE_PED_TO_FACE_LEFT_IN_COVER = 129,
        FORCE_PED_TO_FACE_RIGHT_IN_COVER = 130,
        BLOCK_PED_FROM_TURNING_IN_COVER = 131,
        KEEP_RELATIONSHIP_GROUP_AFTER_CLEAN_UP = 132,
        FORCE_PED_TO_BE_DRAGGED = 133,
        PREVENT_PED_FROM_REACTING_TO_BEING_JACKED = 134,
        IS_SCUBA = 135,
        WILL_ARREST_RATHER_THAN_JACK = 136,
        REMOVE_DEAD_EXTRA_FAR_AWAY = 137,
        RIDING_TRAIN = 138,
        ARREST_RESULT = 139,
        CAN_ATTACK_FRIENDLY = 140,
        WILL_JACK_ANY_PLAYER = 141,
        WILL_JACK_WANTED_PLAYERS_RATHER_THAN_STEAL_CAR = 144,
        SHOOTING_ANIM_FLAG = 145,
        DISABLE_LADDER_CLIMBING = 146,
        STAIRS_DETECTED = 147,
        SLOPE_DETECTED = 148,
        COWER_INSTEAD_OF_FLEE = 150,
        CAN_ACTIVATE_RAGDOLL_WHEN_VEHICLE_UPSIDE_DOWN = 151,
        ALWAYS_RESPOND_TO_CRIES_FOR_HELP = 152,
        DISABLE_BLOOD_POOL_CREATION = 153,
        SHOULD_FIX_IF_NO_COLLISION = 154,
        CAN_PERFORM_ARREST = 155,
        CAN_PERFORM_UNCUFF = 156,
        CAN_BE_ARRESTED = 157,
        PLAYER_PREFER_FRONT_SEAT_MP = 159,
        IS_INJURED = 166,
        DONT_ENTER_VEHICLES_IN_PLAYERS_GROUP = 167,
        PREVENT_ALL_MELEE_TAUNTS = 169,
        IS_INJURED2 = 170,
        ALWAYS_SEE_APPROACHING_VEHICLES = 171,
        CAN_DIVE_AWAY_FROM_APPROACHING_VEHICLES = 172,
        ALLOW_PLAYER_TO_INTERRUPT_VEHICLE_ENTRY_EXIT = 173,
        ONLY_ATTACK_LAW_IF_PLAYER_IS_WANTED = 174,
        PEDS_JACKING_ME_DONT_GET_IN = 177,
        PED_IGNORES_ANIM_INTERRUPT_EVENTS = 179,
        IS_IN_CUSTODY = 180,
        FORCE_STANDARD_BUMP_REACTION_THRESHOLDS = 181,
        LAW_WILL_ONLY_ATTACK_IF_PLAYER_IS_WANTED = 182,
        IS_AGITATED = 183,
        PREVENT_AUTO_SHUFFLE_TO_DRIVERS_SEAT = 184,
        USE_KINEMATIC_MODE_WHEN_STATIONARY = 185,
        ENABLE_WEAPON_BLOCKING = 186,
        HAS_HURT_STARTED = 187,
        DISABLE_HURT = 188,
        PLAYER_IS_WEIRD = 189,
        DO_NOTHING_WHEN_ON_FOOT_BY_DEFAULT = 193,
        USING_SCENARIO = 194,
        VISIBLE_ON_SCREEN = 195,
        DONT_ACTIVATE_RAGDOLL_ON_VEHICLE_COLLISION_WHEN_DEAD = 199,
        HAS_BEEN_IN_ARMED_COMBAT = 200,
        AVOIDANCE_IGNORE_ALL = 202,
        AVOIDANCE_IGNORED_BY_ALL = 203,
        AVOIDANCE_IGNORE_GROUP1 = 204,
        AVOIDANCE_MEMBER_OF_GROUP1 = 205,
        FORCED_TO_USE_SPECIFIC_GROUP_SEAT_INDEX = 206,
        DISABLE_EXPLOSION_REACTIONS = 208,
        DODGED_PLAYER = 209,
        WAITING_FOR_PLAYER_CONTROL_INTERRUPT = 210,
        FORCED_TO_STAY_IN_COVER = 211,
        GENERATES_SOUND_EVENTS = 212,
        LISTENS_TO_SOUND_EVENTS = 213,
        ALLOW_TO_BE_TARGETED_IN_A_VEHICLE = 214,
        WAIT_FOR_DIRECT_ENTRY_POINT_TO_BE_FREE_WHEN_EXITING = 215,
        ONLY_REQUIRE_ONE_PRESS_TO_EXIT_VEHICLE = 216,
        FORCE_EXIT_TO_SKYDIVE = 217,
        DONT_ENTER_LEADERS_VEHICLE = 220,
        DISABLE_EXIT_TO_SKYDIVE = 221,
        SHRINK = 223,
        MELEE_COMBAT = 224,
        DISABLE_POTENTIAL_TO_BE_WALKED_INTO_RESPONSE = 225,
        DISABLE_PED_AVOIDANCE = 226,
        FORCE_RAGDOLL_UPON_DEATH = 227,
        DISABLE_PANIC_IN_VEHICLE = 229,
        ALLOWED_TO_DETACH_TRAILER = 230,
        IS_HOLDING_PROP = 236,
        BLOCKS_PATHING_WHEN_DEAD = 237,
        FORCE_SKIN_CHARACTER_CLOTH = 240,
        DISABLE_STOPPING_VEHICLE_ENGINE = 241,
        PHONE_DISABLE_TEXTING_ANIMATIONS = 242,
        PHONE_DISABLE_TALKING_ANIMATIONS = 243,
        PHONE_DISABLE_CAMERA_ANIMATIONS = 244,
        DISABLE_BLIND_FIRING_IN_SHOT_REACTIONS = 245,
        ALLOW_NEARBY_COVER_USAGE = 246,
        CAN_PLAY_IN_CAR_IDLES = 248,
        CAN_ATTACK_NON_WANTED_PLAYER_AS_LAW = 249,
        WILL_TAKE_DAMAGE_WHEN_VEHICLE_CRASHES = 250,
        AI_CAN_DRIVE_PLAYER_AS_REAR_PASSENGER = 251,
        PLAYER_CAN_JACK_FRIENDLY_PLAYERS = 252,
        IS_ON_STAIRS = 253,
        AI_DRIVER_ALLOW_FRIENDLY_PASSENGER_SEAT_ENTRY = 255,
        ALLOW_MISSION_PED_TO_USE_INJURED_MOVEMENT = 257,
        PREVENT_USING_LOWER_PRIORITY_SEATS = 261,
        DISABLE_CLOSING_VEHICLE_DOOR = 264,
        TELEPORT_TO_LEADER_VEHICLE = 268,
        AVOIDANCE_IGNORE_WEIRD_PED_BUFFER = 269,
        ON_STAIR_SLOPE = 270,
        DONT_BLIP_COP = 272,
        CLIMBED_SHIFTED_FENCE = 273,
        KILL_WHEN_TRAPPED = 275,
        EDGE_DETECTED = 276,
        AVOID_TEAR_GAS = 279,
        NO_WRITHE = 281,
        ONLY_USE_FORCED_SEAT_WHEN_ENTERING_HELI_IN_GROUP = 282,
        DISABLE_WEIRD_PED_EVENTS = 285,
        SHOULD_CHARGE_NOW = 286,
        RAGDOLLING_ON_BOAT = 287,
        HAS_BRANDISHED_WEAPON = 288,
        FREEZE_POSITION = 292,
        DISABLE_SHOCKING_EVENTS = 294,
        NEVER_REACT_TO_PED_ON_ROOF = 296,
        DISABLE_SHOCKING_DRIVING_ON_PAVEMENT_EVENTS = 299,
        DISABLE_PED_CONSTRAINTS = 301,
        FORCE_INITIAL_PEEK_IN_COVER = 302,
        DISABLE_JUMPING_FROM_VEHICLES_AFTER_LEADER = 305,
        IS_IN_CLUSTER = 310,
        SHOUT_TO_GROUP_ON_PLAYER_MELEE = 311,
        IGNORED_BY_AUTO_OPEN_DOORS = 312,
        NO_PED_MELEE = 314,
        CHECK_LOS_FOR_SOUND_EVENTS = 315,
        CAN_SAY_FOLLOWED_BY_PLAYER_AUDIO = 317,
        ACTIVATE_RAGDOLL_FROM_MINOR_PLAYER_CONTACT = 318,
        FORCE_POSE_CHARACTER_CLOTH = 320,
        HAS_CLOTH_COLLISION_BOUNDS = 321,
        HAS_HIGH_HEELS = 322,
        DONT_BEHAVE_LIKE_LAW = 324,
        DISABLE_POLICE_INVESTIGATING_BODY = 326,
        DISABLE_WRITHE_SHOOT_FROM_GROUND = 327,
        LOWER_PRIORITY_OF_WARP_SEATS = 328,
        DISABLE_TALK_TO = 329,
        DONT_BLIP = 330,
        IS_SWITCHING_WEAPON = 331,
        IGNORE_LEG_IK_RESTRICTIONS = 332,
        ALLOW_TASK_DO_NOTHING_TIMESLICING = 339,
        NOT_ALLOWED_TO_JACK_ANY_PLAYERS = 342,
        ALWAYS_LEAVE_TRAIN_UPON_ARRIVAL = 345,
        ONLY_WRITHE_FROM_WEAPON_DAMAGE = 347,
        USE_SLO_MO_BLOOD_VFX = 348,
        EQUIP_JETPACK = 349,
        PREVENT_DRAGGED_OUT_OF_CAR_THREAT_RESPONSE = 350,
        FORCE_DEEP_SURFACE_CHECK = 356,
        DISABLE_DEEP_SURFACE_ANIMS = 357,
        DONT_BLIP_NOT_SYNCED = 358,
        IS_DUCKING_IN_VEHICLE = 359,
        PREVENT_AUTO_SHUFFLE_TO_TURRET_SEAT = 360,
        DISABLE_EVENT_INTERIOR_STATUS_CHECK = 361,
        HAS_RESERVE_PARACHUTE = 362,
        USE_RESERVE_PARACHUTE = 363,
        TREAT_DISLIKE_AS_HATE_WHEN_IN_COMBAT = 364,
        ONLY_UPDATE_TARGET_WANTED_IF_SEEN = 365,
        ALLOW_AUTO_SHUFFLE_TO_DRIVERS_SEAT = 366,
        PREVENT_REACTING_TO_SILENCED_CLONE_BULLETS = 372,
        DISABLE_INJURED_CRY_FOR_HELP_EVENTS = 373,
        NEVER_LEAVE_TRAIN = 374,
        DONT_DROP_JETPACK_ON_DEATH = 375,
        DISABLE_AUTO_EQUIP_HELMETS_IN_BIKES = 380,
        IS_CLIMBING_LADDER = 388,
        HAS_BARE_FEET = 389,
        GO_ON_WITHOUT_VEHICLE_IF_IT_IS_UNABLE_TO_GET_BACK_TO_ROAD = 391,
        BLOCK_DROPPING_HEALTH_SNACKS_ON_DEATH = 392,
        FORCE_THREAT_RESPONSE_TO_NON_FRIEND_TO_FRIEND_MELEE_ACTIONS = 394,
        DONT_RESPOND_TO_RANDOM_PEDS_DAMAGE = 395,
        ALLOW_CONTINUOUS_THREAT_RESPONSE_WANTED_LEVEL_UPDATES = 396,
        KEEP_TARGET_LOSS_RESPONSE_ON_CLEANUP = 397,
        PLAYERS_DONT_DRAG_ME_OUT_OF_CAR = 398,
        BROADCAST_RESPONDED_TO_THREAT_WHEN_GOING_TO_POINT_SHOOTING = 399,
        IGNORE_PED_TYPE_FOR_IS_FRIENDLY_WITH = 400,
        TREAT_NON_FRIENDLY_AS_HATE_WHEN_IN_COMBAT = 401,
        DONT_LEAVE_VEHICLE_IF_LEADER_NOT_IN_VEHICLE = 402,
        ALLOW_MELEE_REACTION_IF_MELEE_PROOF_IS_ON = 404,
        USE_NORMAL_EXPLOSION_DAMAGE_WHEN_BLOWN_UP_IN_VEHICLE = 407,
        DISABLE_HOMING_MISSILE_LOCK_FOR_VEHICLE_PED_INSIDE = 408,
        DISABLE_TAKE_OFF_SCUBA_GEAR = 409,
        ALPHA = 410,
        LAW_PEDS_CAN_FLEE_FROM_NON_WANTED_PLAYER = 411,
        FORCE_BLIP_SECURITY_PEDS_IF_PLAYER_IS_WANTED = 412,
        IS_HOLSTERING_WEAPON = 413,
        USE_GO_TO_POINT_FOR_SCENARIO_NAVIGATION = 414,
        DONT_CLEAR_LOCAL_PASSENGERS_WANTED_LEVEL = 415,
        BLOCK_AUTO_SWAP_ON_WEAPON_PICKUPS = 416,
        THIS_PED_IS_A_TARGET_PRIORITY_FOR_AI = 417,
        IS_SWITCHING_HELMET_VISOR = 418,
        FORCE_HELMET_VISOR_SWITCH = 419,
        FLAMING_FOOTPRINTS = 421,
        DISABLE_VEHICLE_COMBAT = 422,
        DISABLE_PROP_KNOCK_OFF = 423,
        FALLS_LIKE_AIRCRAFT = 424,
        USE_LOCKPICK_VEHICLE_ENTRY_ANIMATIONS = 426,
        IGNORE_INTERIOR_CHECK_FOR_SPRINTING = 427,
        SWAT_HELI_SPAWN_WITHIN_LAST_SPOTTED_LOCATION = 428,
        DISABLE_STARTING_VEHICLE_ENGINE = 429,
        IGNORE_BEING_ON_FIRE = 430,
        DISABLE_TURRET_OR_REAR_SEAT_PREFERENCE = 431,
        DISABLE_WANTED_HELICOPTER_SPAWNING = 432,
        USE_TARGET_PERCEPTION_FOR_CREATING_AIMED_AT_EVENTS = 433,
        DISABLE_HOMING_MISSILE_LOCKON = 434,
        FORCE_IGNORE_MAX_MELEE_ACTIVE_SUPPORT_COMBATANTS = 435,
        STAY_IN_DEFENSIVE_AREA_WHEN_IN_VEHICLE = 436,
        DONT_SHOUT_TARGET_POSITION = 437,
        DISABLE_HELMET_ARMOR = 438,
        PREVENT_VEH_EXIT_DUE_TO_INVALID_WEAPON = 441,
        IGNORE_NET_SESSION_FRIENDLY_FIRE_CHECK_FOR_ALLOW_DAMAGE = 442,
        DONT_LEAVE_COMBAT_IF_TARGET_PLAYER_IS_ATTACKED_BY_POLICE = 443,
        CHECK_LOCKED_BEFORE_WARP = 444,
        DONT_SHUFFLE_IN_VEHICLE_TO_MAKE_ROOM = 445,
        GIVE_WEAPON_ON_GETUP = 446,
        DONT_HIT_VEHICLE_WITH_PROJECTILES = 447,
        DISABLE_FORCED_ENTRY_FOR_OPEN_VEHICLES_FROM_TRY_LOCKED_DOOR = 448,
        FIRES_DUMMY_ROCKETS = 449,
        IS_ARRESTING = 450,
        IS_DECOY_PED = 451,
        HAS_ESTABLISHED_DECOY = 452,
        BLOCK_DISPATCHED_HELICOPTERS_FROM_LANDING = 453,
        DONT_CRY_FOR_HELP_ON_STUN = 454,
        CAN_BE_INCAPACITATED = 456,
        MUTABLE_FORCED_AIM = 457,
        DONT_CHANGE_TARGET_FROM_MELEE = 458
    }
}
