function calcule_imc()
{
    let peso = document.getElementById('peso').value;
    let altura = document.getElementById('altura').value;
    if(altura > 500 || altura < 0)
    {
      return;
    }
    if(peso > 500 || peso < 0)
    {
      return;
    }
    let x = peso / ((altura * altura) / 10000);
    console.log(document.getElementById('imc-result').text);
    document.getElementById('imc-result').innerHTML = x.toPrecision(4).toString();
    document.getElementById('outputs').style.display = "block";
    document.getElementById('inputs').style.display = "none";
}

function show(id)
{
    if (document.getElementById(id).style.display == 'block')
    {
        document.getElementById('imc-result').innerHTML = "hello";
        document.getElementById('outputs').style.display = "none";
        document.getElementById('inputs').style.display = "block";
        document.getElementById(id).style.display = 'none';
    }
    else
    {
        document.getElementById(id).style.display = 'block';
    }
}
    
