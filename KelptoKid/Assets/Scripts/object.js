﻿#pragma strict
private static var position:int;
function Start () {

}

function Update () {

}
function OnCollisionEnter2D(collision : Collision2D) {
	if (collision.gameObject.tag == "player"){
		Application.LoadLevel("Win");
		Destroy(gameObject);
	}
	
	
}