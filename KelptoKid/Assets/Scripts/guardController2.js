#pragma strict
private var animator:Animator;

var force_x = 100;
var force_y = 100;
var start_x = 7.5;
var start_y = -5.5;
var random = 1;

function Start () {
	transform.position=Vector2(start_x, start_y);
	animator = GetComponent("Animator");
}

function FixedUpdate () {	
	
	rigidbody2D.AddForce(Vector2(0, force_y));
	//random = random * -1;

	
}
	
function OnCollisionEnter2D(collision : Collision2D) {
	if (collision.gameObject.tag == "player"){
		Application.LoadLevel("Dead");
	}

	if (collision.gameObject.tag == "wall"){
		force_y = force_y * -1;
		rigidbody2D.AddForce(Vector2(0, force_y));
	}
}