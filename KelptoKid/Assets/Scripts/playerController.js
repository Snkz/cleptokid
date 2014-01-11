#pragma strict

var force = 100;
var start_x = 0;
var start_y = 0;
private var lastDirectionFaced:String=("Right");

function Start () {
	transform.position=Vector2(start_x, start_y);
}

function FixedUpdate () {	
	if(Input.GetKey(KeyCode.A)){
		rigidbody2D.AddForce(Vector2(-1*force, 0));
		transform.localScale.x=-1;
		lastDirectionFaced=("Left");
	}
	if(Input.GetKey(KeyCode.D)){
		rigidbody2D.AddForce (Vector2(1*force, 0));
		transform.localScale.x=1;
		lastDirectionFaced=("Right");
	}
	if(Input.GetKey(KeyCode.W)){
		rigidbody2D.AddForce(Vector2(0, 1*force));
		//transform.localScale.y=-1;
		lastDirectionFaced=("Up");
	}
	if(Input.GetKey(KeyCode.S)){
		rigidbody2D.AddForce(Vector2(0, -1*force));
		//transform.localScale.y=-1;
		lastDirectionFaced=("Down");
	}
		


	
}
	
/*function OnCollisionEnter2D(collision : Collision2D) {
	if (collision.gameObject.tag == "player2"&&(playerController2.player2Y>transform.position.y)){
	//Debug.Log("eeeeepaaaah");
	player1Flat=true;
	}
}*/