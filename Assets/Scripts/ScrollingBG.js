#pragma strict

static var scrollMovement;
var spawnPoint : SpriteRenderer;
var ListOfBGPrefab : Transform;

function Start () {
print("  limit1");
scrollMovement = true;

var Speed1 = 50;
}

function Update () {
if(scrollMovement)
{
 transform.Translate(new Vector3(0,1 * Time.deltaTime, 0));
 }
 }
 
	function OnCollisionEnter(collision : Collision) {
	print("touches upper limit1");

	if (collision.gameObject.tag == "UpperLimit")
print("touches upper limit");
}
function OnTriggerEnter2D(other: Collider2D) {
print("touches upper limit1");
		createNewObject();
				Destroy(gameObject);

	}
function createNewObject()
{
		Instantiate (ListOfBGPrefab,spawnPoint.transform.position, Quaternion.identity);
}