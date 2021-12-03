import { Tween } from "cc";

export class TweenPool {

    private _tweens: Tween<any>[] = [];

    add(tween: Tween<any>) {
        this._tweens.push(tween);
    }

    clear() {
        this._tweens?.forEach(v => v.stop());
        this._tweens = [];
    }

}