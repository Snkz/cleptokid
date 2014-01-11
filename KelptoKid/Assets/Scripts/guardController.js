#pragma strict
private var animator:Animator;

var force_x = 100;
var force_y = 100;
var start_x = 5.5;
var start_y = 5.5;
var random = 1;

function Start () {
	transform.position=Vector2(start_x, start_y);
	animator = GetComponent("Animator");
}

function FixedUpdate () {	
	
	rigidbody2D.AddForce(Vector2(force_x, force_y));
	random = random * -1

	
}
	
function OnCollisionEnter2D(collision : Collision2D) {
	if (collision.gameObject.tag == "guard"){
		new Rect ( 10, 10, 100, 30 ), "GAME OVER" 
	}

	if (collision.gameObject.tag == "guard"){
		rigidbody2D.AddForce(Vector2(-1*force_x, random*force_y));
	}
}