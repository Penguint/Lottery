var range = prompt("请输入范围", "");
var num = prompt("请输入个数", "");
var flag = true;

while (flag)
{

    var data = [];
    for (var i=0;i < range;i++)
    {
        var e={id:i,value:Math.random()};
        data.push(e);
    }

    data.sort(function(a, b) {
                  return a.value - b.value;
              });

    var result="";

    for (var i=0;i < num;i++)
    {
        result += " " + data[i].id;
    }
    flag = confirm(result);
}
