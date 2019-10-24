class Tree {
    constructor(size, leaves) {
        this.size = (typeof size === "undefined") ? 10 : size;
        const defaultLeaves = { spring: 'green', summer: 'green', fall: 'orange', winter: null };
        this.leaves = (typeof leaves === "undefined") ? defaultLeaves : leaves;
        this.leafColor;
    }
    changeSeason(season) {
        this.leafColor = this.leaves[season];
        if (season === 'spring') {
            this.size += 1;
        }
    }
}


class Maple {
    constructor(syrupQty, size, leaves) {
        Tree.call(this, size, leaves);
        this.syrupQty = (typeof syrupQty === "undefined") ? 15 : syrupQty;
    }
    changeSeason(season) {
        Tree.prototype.changeSeason.call(this, season);
        if (season === 'spring') {
            this.syrupQty += 1;
        }
    }
    gatherSyrup() {
        this.syrupQty -= 3;
    }
}

Maple.prototype = Object.create(Tree.prototype);
Maple.prototype.constructor = Maple;



const myMaple = new Maple(15, 5);
myMaple.changeSeason('fall');
myMaple.gatherSyrup();
myMaple.changeSeason('spring');
