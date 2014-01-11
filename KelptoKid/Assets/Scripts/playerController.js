#pragma strict

var movement:int;
private var lastDirectionFaced:String=("Right");

function Start () {
transform.position=Vector2(0,0);
}
function FixedUpdate () {	
	if(Input.GetKey(KeyCode.A)){
		rigidbody2D.AddForce(Vector2(-2f,0));
		transform.localScale.x=-1;
		lastDirectionFaced=("Left");
	}
	if(Input.GetKey(KeyCode.D)){
		rigidbody2D.AddForce(Vector2(2f,0));
		transform.localScale.x=1;
		lastDirectionFaced=("Right");
	}
		


	
}
	
/*function OnCollisionEnter2D(collision : Collision2D) {
	if (collision.gameObject.tag == "player2"&&(playerController2.player2Y>transform.position.y)){
	//Debug.Log("eeeeepaaaah");
	player1Flat=true;
	}
}*/