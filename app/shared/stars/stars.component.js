"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var StarsComponent = (function () {
    function StarsComponent() {
        this.ratingClicked = new core_1.EventEmitter();
    }
    StarsComponent.prototype.onClick = function () {
        this.ratingClicked.emit("test " + this.rating);
    };
    StarsComponent.prototype.ngOnChanges = function () {
        this.starWidth = 30 * this.rating;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], StarsComponent.prototype, "rating", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], StarsComponent.prototype, "ratingClicked", void 0);
    StarsComponent = __decorate([
        core_1.Component({
            selector: 'stars',
            moduleId: module.id,
            templateUrl: 'stars.component.html',
            styles: ["\n\t.star-rating {\n            font-size: 0;\n            white-space: nowrap;\n            display: inline-block;\n            width: 150px;\n            height: 30px;\n            overflow: hidden;\n            position: relative;\n            background: url('data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDIwIDIwIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cG9seWdvbiBmaWxsPSIjREREREREIiBwb2ludHM9IjEwLDAgMTMuMDksNi41ODMgMjAsNy42MzkgMTUsMTIuNzY0IDE2LjE4LDIwIDEwLDE2LjU4MyAzLjgyLDIwIDUsMTIuNzY0IDAsNy42MzkgNi45MSw2LjU4MyAiLz48L3N2Zz4=');\n            background-size: contain;\n        }\n        .crop { overflow: hidden; }\n        div { cursor: pointer;}\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], StarsComponent);
    return StarsComponent;
}());
exports.StarsComponent = StarsComponent;
//# sourceMappingURL=stars.component.js.map