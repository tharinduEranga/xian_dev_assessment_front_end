class CartonDTO {
    constructor(private _id: bigint, private _name: string, private _units: bigint, private _price: number) {
    }

    get id(): bigint {
        return this._id;
    }

    set id(value: bigint) {
        this._id = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get units(): bigint {
        return this._units;
    }

    set units(value: bigint) {
        this._units = value;
    }

    get price(): number {
        return this._price;
    }

    set price(value: number) {
        this._price = value;
    }
}
