#pragma strict

var stageNum = 1; // 스테이지 번호

//--------------
//스테이지 테스트
//--------------

function Start () {
	MakeStage();
}

//----------------
//스테이지 만들기
//----------------
function MakeStage() {
	//블록 시작위치
	var px = -0.3;		//맨 왼쪽
	var pz = 0.0;		//맨 위쪽
	var w = 1.0;		//블록 사이의 수평 간격
	var h = 0.5;		//블록 사이의 수직 간격
	
	var tmp =jsStage.Stage[stageNum - 1]; //스테이지의 맵 읽기
	
		for (var i = 0; i< 11; i++) { //11번줄 반복
			var s :String = tmp[i];		//1줄 읽기
			var x = px;					//한 줄의 시작 위치
		
		for(var j = 0; j < s.Length; j++) { //글자 수만큼 반복
			var ch = s.Substring(j,1);		//1문자 읽기
			if (ch == "." || ch == " "){
				x += w; //'.'과 공백은 1칸
				continue;
			}
			if (ch == "-") { //'-'는 반칸 공백
				x += w / 2;
				continue;
			}
			
			
			//종류에 맞는 블록 가져오기
			var block : GameObject = Instantiate(Resources.Load("Prefabs/pfBlock" + ch, GameObject));
			block.transform.position = Vector3(x, 0, pz);
			x += w;
			};// for j
			
			pz -= h;
		}//for i
	}
function Update () {

}