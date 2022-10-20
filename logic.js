function storeData(v)
{
    let textValue = document.getElementById("text_area")
    let oldValue = textValue.value;
    let length = oldValue.length-1
    let last_element = oldValue[length]
    let symbol = ['+','*','/','-','.']
    if(symbol.includes(v))
    {
        if(symbol.includes(last_element))
        {
            let removeTemp = oldValue.slice(0,-1)
            textValue.value = removeTemp+v
        }
        else{
            textValue.value = oldValue+v
        }
    }
    else{
        textValue.value = oldValue+v
    }
}

function TotalValue()
{
    let textValue = document.getElementById("text_area")
    let temp = eval(textValue.value)
    textValue.value = temp
}

function clearText()
{
    document.getElementById("text_area").value = ''
}