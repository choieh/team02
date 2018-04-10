// Uses xEyes.js Rev 14 By A.R.Collins

$(document).ready(function() {
  /*jseyes();*/

  var tim;
  var eric;

  function initEyes() {
    var e1Lft = 38.50; // %width to center wrt face top left 166/400=41.50
    var e1Top = 48.88; // %height '' '' 212/622=34.08
    var e2Lft = 60.59; // 279/400=69.25
    var e2Top = 46.95; // 213/622=34.24
    var e1Radius = 2.4; // %width of face
    var e2Radius = 2.4;

    tim = new Xeyes("tim-inner", "tim-eye-1", e1Lft, e1Top, e1Radius, "tim-eye-2", e2Lft, e2Top, e2Radius);

    var e1Lft2 = 41.45; // %width to center wrt face top left 166/400=41.50
    var e1Top2 = 42.29; // %height '' '' 212/622=34.08
    var e2Lft2 = 62.30; // 279/400=69.25
    var e2Top2 = 43.17; // 213/622=34.24
    var e1Radius2 = 2.4; // %width of face
    var e2Radius2 = 2.4;

    eric = new Xeyes("eric-inner", "eric-eye-1", e1Lft2, e1Top2, e1Radius2, "eric-eye-2", e2Lft2, e2Top2, e2Radius2);

    var e1Lft3 = 48; // %width to center wrt face top left 166/400=41.50
    var e1Top3 = 28.28; // %height '' '' 212/622=34.08
    var e2Lft3 = 66.40; // 279/400=69.25
    var e2Top3 = 30.31; // 213/622=34.24
    var e1Radius3 = 2.4; // %width of face
    var e2Radius3 = 2.4;

    skel = new Xeyes("skel-inner", "skel-eye-1", e1Lft3, e1Top3, e1Radius3, "skel-eye-2", e2Lft3, e2Top3, e2Radius3);
  }

  initEyes();
})

function associateObjWithEvent(obj, methodName) {
  return (function(e) {
    console.log(obj)
    if (!e)
      e = window.event;
    return obj[methodName](e);
  });
}

function getPosition(element) {
  var xPosition = 0;
  var yPosition = 0;
  while (element) {
    xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft);
    yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
    element = element.offsetParent;
  }
  return {
    x: xPosition,
    y: yPosition
  };
}

function Xeyes(faceId, e1Id, e1Lft, e1Tp, e1Rad, e2Id, e2Lft, e2Tp, e2Rad) {
  this.faceObj = document.getElementById(faceId);
  this.eye1Obj = document.getElementById(e1Id);
  this.eye2Obj = document.getElementById(e2Id);
  this.e1Lft = e1Lft;
  this.e1Top = e1Tp;
  this.e1Radius = e1Rad;
  this.e2Lft = e2Lft;
  this.e2Top = e2Tp;
  this.e2Radius = e2Rad;
  this.e1x;
  this.e1y; // eye centre relative to top left of doc
  this.r1;
  this.e1xLoc;
  this.e1yLoc; // eye top left relative to top left of parent
  this.e2x;
  this.e2y;
  this.r2; // eye radii
  this.e2xLoc;
  this.e2yLoc;
  // setup initial eye locations
  this.eyesInit();
  // if the browser window is resized eye locations must be re-calculated
  window.onresize = associateObjWithEvent(this, "eyesInit");
  // setup the eyeMove event to be called when ever the cursor is moved
  //document.onmousemove = associateObjWithEvent(this, "eyesMove");
  var self = this;
  $(document).mousemove(function(e) {
      self.eyesMove(e)
    })
    // for debug use document.onclick = associateObjWithEvent(this, "eyesMove");
}
Xeyes.prototype.eyesInit = function(e) {
    var faceWidth = this.faceObj.offsetWidth;
    var faceHeight = this.faceObj.offsetHeight;
    // get left,top of eyes relative to parent
    this.e1xLoc = 0.01 * this.e1Lft * faceWidth - this.eye1Obj.offsetWidth / 2;
    this.e1yLoc = 0.01 * this.e1Top * faceHeight - this.eye1Obj.offsetHeight / 2;
    this.e2xLoc = 0.01 * this.e2Lft * faceWidth - this.eye2Obj.offsetWidth / 2;
    this.e2yLoc = 0.01 * this.e2Top * faceHeight - this.eye2Obj.offsetHeight / 2;
    // get absolute position of centre of eyes wrt to top left of document body
    tmp = getPosition(this.faceObj);
    this.e1x = tmp.x + 0.01 * this.e1Lft * faceWidth;
    this.e1y = tmp.y + 0.01 * this.e1Top * faceHeight;
    this.e2x = tmp.x + 0.01 * this.e2Lft * faceWidth;
    this.e2y = tmp.y + 0.01 * this.e2Top * faceHeight;
    this.r1 = 0.01 * this.e1Radius * faceWidth;
    this.r2 = 0.01 * this.e2Radius * faceWidth;
    // now move the eyes to a less goggle-eye position until mouse moves
    this.eye1Obj.style.left = this.e1xLoc + "px"; // "12.4em";
    this.eye1Obj.style.top = this.e1yLoc + this.r1 / 1.5 + "px"; // "16.3em";
    this.eye2Obj.style.left = this.e2xLoc + "px"; // "21.0em";
    this.eye2Obj.style.top = this.e2yLoc + this.r2 / 1.5 + "px"; // "16.3em";
  }
  // Move eyes
Xeyes.prototype.eyesMove = function(e) {
  var csrX, csrY;
  var x, y;
  var dx, dy;
  var R;
  var savThis = this;

  document.onmousemove = null; // turn off mouseMove events
  if (e.pageX == null) {
    // IE case
    var d = (document.documentElement &&
        document.documentElement.scrollLeft != null) ?
      document.documentElement : document.body;
    csrX = e.clientX + d.scrollLeft;
    csrY = e.clientY + d.scrollTop;
  } else {
    // all other browsers
    csrX = e.pageX;
    csrY = e.pageY;
  }
  // eye 1 first
  dx = csrX - this.e1x;
  dy = csrY - this.e1y;
  R = Math.sqrt(dx * dx + dy * dy); // distance from eye centre to csr
  x = (R < this.r1) ? dx : dx * this.r1 / R;
  y = (R < this.r1) ? dy : dy * this.r1 / R;
  this.eye1Obj.style.left = x + this.e1xLoc + "px";
  this.eye1Obj.style.top = y + this.e1yLoc + "px";
  // now for eye 2
  dx = csrX - this.e2x;
  dy = csrY - this.e2y;
  R = Math.sqrt(dx * dx + dy * dy);
  x = (R < this.r2) ? dx : dx * this.r2 / R;
  y = (R < this.r2) ? dy : dy * this.r2 / R;
  this.eye2Obj.style.left = x + this.e2xLoc + "px";
  this.eye2Obj.style.top = y + this.e2yLoc + "px";
  // set a timer to make a delayed call to setup mousemove event
  window.setTimeout(function() {
    document.onmousemove = associateObjWithEvent(savThis, "eyesMove")
  }, 100);
}
