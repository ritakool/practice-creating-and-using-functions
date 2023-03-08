function alertMessage()
{
    alert("Xin chao")
}
function increaseArgument()
{
    let Argument = parseInt(prompt("Nhap"))
    return alert(Argument+1);
}
function parameter()
{
    let parameter1 = +prompt("Tham so thu nhat");
    let parameter2 = +prompt("tham so thu hai");
    if (parameter1>parameter2)
    {
        return alert("So thu nhat lon hon so thu hai")
    }
    else
    {
        let sum = parameter1 + parameter2;
        return alert("tong hai so: " +sum);
    }
}
function addNumbers2()
{
    function addNumbers() {
    firstNum = 4;
    secondNum = 8;
    result = firstNum + secondNum;
    return alert(result);
}
result = 0;
    alert(result);
result = addNumbers();
}
function Constellations()
{
    let arr1=["Polaris","Aldebaran","Deneb","Vega","Altair","Dubhe","Regulus"]
    let arr2=["Ursa Minor", "Tarurus", "Cygnus", "Lyra", "Aquila", "Ursa Major" ,"Leo"]
    let constellations = prompt("Nhap chom sao");
    let result1 ="";
    for (let i=0;i<arr1.length;i++)
    {
        if (constellations === arr1[i])
        {
            for (let j=0;j<arr2.length;j++)
            {
                if (j=== i)
                {
                    result1 = arr2[j];
                    return document.write(result1);
                }
            }
        } else
        {
          result1 = "Không tìm thấy";
        }
    }document.write(result1);
}