if(! window.speechSynthesis) alert('読み上げ非対応みたい');

var synthes = new SpeechSynthesisUtterance('こんにちは');
synthes.lang = "ja-JP"

function read(){
  var str = document.getElementById("txt").value;
  synthes = new SpeechSynthesisUtterance(str);
  speechSynthesis.speak( synthes );
}

function call(){
  var n = document.getElementById("num").value;
  var str = num2kan(n);
  synthes = new SpeechSynthesisUtterance(str + "番の患者さんは、Aの診察室にお入りください");
  speechSynthesis.speak( synthes );
}

//漢数字変換
function num2kan (n) {
	var output_data = "";//返り値
	var tmp_hash = {};//置換用のハッシュ
  n = String(n);
  tmp_hash =  {"0":"〇", "1":"一", "2":"二", "3":"三", "4":"四", "5":"五", "6":"六", "7":"七", "8":"八", "9":"九", "０":"〇", "１":"一", "２":"二", "３":"三", "４":"四", "５":"五", "６":"六", "７":"七", "８":"八", "９":"九"};
  for( i = 0; i< n.length; i++) {
    output_data += tmp_hash[n[i]];
  };
	return output_data;
}

// 桁数制限
function lengthCheck(object){
  if(object.value.length > 4){
    object.value = object.value.slice(0, 4);
  }
  if(object.value < 0){
    object.value = 0;
  }
}