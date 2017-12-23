function solution(T) {
    return check(T);
}

function check(node) {
    if(!node) {
        return -1;
    }
    
    var heightLeft = check(node.l);
    var heightRight = check(node.r);
    
    return 1 + Math.max(heightLeft, heightRight);
}


/*int solution(struct tree * T) {
    if ((T->l == 0) && (T->r==0))  return  0;
    
    int  result_r=0;
    int  result_l=0;
    
    if(T->l != 0) result_l = solution(T->l);
    if(T->r != 0) result_r = solution(T->r);
    
    T->x = (result_l>result_r?result_l:result_r)+1;
    
    return T->x;
}*/

// var TreeHeight = (function () {
//     function TreeHeight() {
    
//     }

//     TreeHeight.prototype.solution = function (t) {
//         return this.s(t) - 1;
//     };
//     TreeHeight.prototype.s = function (t) {
//         if (t == null) {
//             return 0;
//         }
//         return Math.max(this.s(t.l), this.s(t.r)) + 1;
//     };
//     return TreeHeight;
// }());


// TreeHeight["__class"] = "TreeHeight";
// (function (TreeHeight) {
//     var Tree = (function () {
//         function Tree() {
//             this.x = 0;
//             this.l = null;
//             this.r = null;
//         }
//         return Tree;
//     }());
//     TreeHeight.Tree = Tree;
//     Tree["__class"] = "TreeHeight.Tree";
// })(TreeHeight || (TreeHeight = {}));

// Tree obj is an Object with attributes
// obj.x - type: int
// obj.l - type: Tree
// obj.r - type: Tree

// function Tree (x, l, r) {
//     this.x = x;
//     this.l = l;
//     this.r = r;
// }

// var T = new Tree(5, (3, (20, (6, None, None), None), None), (10, (1, None, None), (15, (30, None, (9, None, None)), (8, None, None))));

/*var Tree = (function () {
        function Tree() {
            this.x = 0;
            this.l = null;
            this.r = null;
        }
        return Tree;
    }());

var solution = (function (T) {

    if ((T.l == 0) && (T.r == 0))  return  0;

    var result_r = 0;
    var result_l = 0;
    
    if(T.l != 0) result_l = solution(T.l);
    if(T.r != 0) result_r = solution(T.r);
    
    T.x = (result_l > result_r ? result_l : result_r) + 1;
    return T.x;


})();*/


// var TreeHeight = (function () {
//     function TreeHeight() {
    
//     }

//     TreeHeight.prototype.solution = function (t) {
//         return this.s(t) - 1;
//     };
//     TreeHeight.prototype.s = function (t) {
//         if (t == null) {
//             return 0;
//         }
//         return Math.max(this.s(t.l), this.s(t.r)) + 1;
//     };
//     return TreeHeight;
// }());



// console.log(solution((5, (3, (20, (6, None, None), None), None), (10, (1, None, None), (15, (30, None, (9, None, None)), (8, None, None))))));
