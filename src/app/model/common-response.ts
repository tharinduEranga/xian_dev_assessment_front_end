class CommonResponse<T> {
    constructor(private _success: boolean, private _content: T, private _message: string) {
    }

    get success(): boolean {
        return this._success;
    }

    set success(value: boolean) {
        this._success = value;
    }

    get content(): T {
        return this._content;
    }

    set content(value: T) {
        this._content = value;
    }

    get message(): string {
        return this._message;
    }

    set message(value: string) {
        this._message = value;
    }
}
