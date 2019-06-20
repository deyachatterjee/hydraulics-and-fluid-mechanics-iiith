
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
