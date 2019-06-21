
//using d3.js implementation

import {ccw}            from '..SRIP/Libraries/d3/counter-clockwise';
import {centroid}       from '..SRIP/Libraries/d3/centroid';
import {rotateRzRyRx}   from '..SRIP/Libraries/d3/rotation';

function polygon(polygons, options, point, angles){

    for (var i = polygons.length - 1; i >= 0; i--) {

        var ploygon = polygons[i];

        for (var j = ploygon.length - 1; j >= 0; j--) {
            var p = ploygon[j];
            p.rotated   = rotateRzRyRx({x : point.x(p), y : point.y(p), z : point.z(p)}, angles);
            p.projected = options.project(p.rotated, options);
        }

        ploygon.ccw      = ccw(ploygon);
        ploygon.centroid = centroid(ploygon);
    }
    return polygons;
}


var cyl =c.getContext("2d");
cyl.fillRect(500,250,100,200)


var ctx = c.getContext("2d");
var grd = ctx.createLinearGradient(0, 0, 5, 0);
grd.addColorStop(0, "red");
ctx.fillStyle = grd;

ctx.fillRect(20, 180, 10, 200);
ctx.fillRect(70, 185, 10, 200);
ctx.fillRect(200, 190, 10, 200);
ctx.fillRect(220, 190, 10, 200);
ctx.fillRect(350, 200, 10, 200);
ctx.fillRect(400, 200, 10, 200);



var rctx = c.getContext("2d");
rctx.rotate(4* Math.PI / 180);
rctx.fillRect(28, 150, 340, 30);

function drawPolygon(d){
    var lastPoint = d[d.length - 1];
    var path = 'M' + lastPoint.projected.x + ',' + lastPoint.projected.y;
    for (var i = d.length - 2; i >= 0; i--) {
        var p = d[i].projected;
        path += 'L' + p.x + ',' + p.y;
    }
    path += 'Z';
    return path;
}
//export function?
