var sum = [] , loop = 0 ,   questions = [{question: "Q1 : 1+1 =",options: [1,2,3,4],answer: 2},
{question: "Q2 : 2+2 =",options: [1,2,3,4],answer: 4},
{question: "Q3 : 3+3 =",options: [1,2,6,4],answer: 6},
{question: "Q4 : 4+4 =",options: [1,8,3,4],answer: 8},
{question: "Q5 : 5+5 =",options: [10,4,5,6],answer: 10},
{question: "Q6 : 6+6 =",options: [3,12,5,6],answer: 12},
{question: "Q7 : 7+7 =",options: [7,14,5,6],answer: 14},
{question: "Q8 : 8+8 =",options: [3,8,5,16],answer: 16},
{question: "Q9 : 9+9 =",options: [3,4,6,18],answer: 18},
{question: "Q10 : 10+10 =",options: [3,4,20,6],answer: 20}];

function startQuiz() {
    var body = document.getElementsByTagName("body")[0];
    var quizBtn = document.getElementById("quizBtn");
    quizBtn.remove();
    var quizDiv = document.createElement("div");
    quizDiv.setAttribute("id","quizDiv");
    body.appendChild(quizDiv);
    var nextBtn = document.createElement("button");
    nextBtn.setAttribute("id","nextBtn");
    var nextBtnText = document.createTextNode("Next - >");
    nextBtn.appendChild(nextBtnText);
    nextBtn.setAttribute("id","nextBtn");
    nextBtn.setAttribute("onClick","question()");
    body.appendChild(nextBtn);
    var quizDivIn = document.createElement("div");
    var pera = document.createElement("p");
    pera.setAttribute("id","pera");
    quizDiv.appendChild(pera);
    var peraText = document.createTextNode(questions[loop].question);
    pera.appendChild(peraText);
    var br = document.createElement("br");
    pera.appendChild(br);
    var br = document.createElement("br");
    pera.appendChild(br);
    var radio_1 = document.createElement("input");
    radio_1.setAttribute("id","radio_1Id");
    radio_1.setAttribute("type","radio");
    radio_1.setAttribute("name","radio");
    radio_1.setAttribute("checked","checked");
    radio_1.setAttribute("value",questions[loop].options[0]);
    pera.appendChild(radio_1);
    var radio_1Text = document.createTextNode(questions[loop].options[0]);
    pera.appendChild(radio_1Text);
    
    var br = document.createElement("br");
    pera.appendChild(br);
    var radio_2 = document.createElement("input");
    radio_2.setAttribute("id","radio_2Id");
    radio_2.setAttribute("type","radio");
    radio_2.setAttribute("name","radio");
    radio_2.setAttribute("value",questions[loop].options[1]);
    pera.appendChild(radio_2);
    var radio_2Text = document.createTextNode(questions[loop].options[1]);
    pera.appendChild(radio_2Text);

    var br = document.createElement("br");
    pera.appendChild(br);
    var radio_3 = document.createElement("input");
    radio_3.setAttribute("id","radio_3Id");
    radio_3.setAttribute("type","radio");
    radio_3.setAttribute("name","radio");
    radio_3.setAttribute("value",questions[loop].options[2]);
    pera.appendChild(radio_3);
    var radio_3Text = document.createTextNode(questions[loop].options[2]);
    pera.appendChild(radio_3Text);

    var br = document.createElement("br");
    pera.appendChild(br);
    var radio_4 = document.createElement("input");
    radio_4.setAttribute("id","radio_4Id");
    radio_4.setAttribute("type","radio");
    radio_4.setAttribute("name","radio");
    radio_4.setAttribute("value",questions[loop].options[3]);
    pera.appendChild(radio_4);
    var radio_4Text = document.createTextNode(questions[loop].options[3]);
    pera.appendChild(radio_4Text);
}

function question()
{
    loop++;
    var radio_1 = document.getElementById("radio_1Id");
    var radio_2 = document.getElementById("radio_2");
    var radio_3 = document.getElementById("radio_3");
    var radio_4 = document.getElementById("radio_4");
    if(radio_1Id.checked == true)
    {
        if(radio_1Id.value == questions[loop-1].answer)
        {
            sum[loop-1] = 1;
        }
        else
        {
            sum[loop-1] = 0;
        }
    }
    else if(radio_2Id.checked == true)
    {
        if(radio_2Id.value == questions[loop-1].answer)
        {
            sum[loop-1] = 1;
        }
        else
        {
            sum[loop-1] = 0;
        }
    }
    else if(radio_3Id.checked == true)
    {
        if(radio_3Id.value == questions[loop-1].answer)
        {
            sum[loop-1] = 1;
        }
        else
        {
            sum[loop-1] = 0;
        }
    }
    else if(radio_4Id.checked == true)
    {
        if(radio_4Id.value == questions[loop-1].answer)
        {
            sum[loop-1] = 1;
        }
        else
        {
            sum[loop-1] = 0;
        }
    }
    if(sum.length == 10)
    {
        var i,s = 0;
        var quizDiv = document.getElementById("quizDiv"); 
        var butDel = document.getElementById("nextBtn")
        butDel.remove();
        var result = document.createElement("p");
        result.setAttribute("id","result");
        quizDiv.appendChild(result);
        for (i=0;i<=9;i++)
        {
        var lineOne = document.createTextNode("Question no " + i + " " + "=" + " " + sum[i] + " " + "mark");
        result.appendChild(lineOne);
        var br = document.createElement("br");
        result.appendChild(br);
        s += sum[i];
        }
        var br = document.createElement("br");
        result.appendChild(br);
        var lineOne = document.createTextNode("Congratulations you get " + " " + s + " " + "marks");
        result.appendChild(lineOne);
    }


    var pera = document.getElementById("pera")
    var newPera = document.createElement("p");
    newPera.setAttribute("id","pera");
    pera.replaceWith(newPera);
    var peraText = document.createTextNode(questions[loop].question);
    newPera.appendChild(peraText);


    var br = document.createElement("br");
    newPera.appendChild(br);
    var br = document.createElement("br");
    newPera.appendChild(br);
    var radio_1 = document.createElement("input");
    radio_1.setAttribute("id","radio_1Id");
    radio_1.setAttribute("type","radio");
    radio_1.setAttribute("name","radio");
    radio_1.setAttribute("checked","checked");
    radio_1.setAttribute("value",questions[loop].options[0]);
    newPera.appendChild(radio_1);
    var radio_1Text = document.createTextNode(questions[loop].options[0]);
    newPera.appendChild(radio_1Text);
    
    var br = document.createElement("br");
    newPera.appendChild(br);
    var radio_2 = document.createElement("input");
    radio_2.setAttribute("id","radio_2Id");
    radio_2.setAttribute("type","radio");
    radio_2.setAttribute("name","radio");
    radio_2.setAttribute("value",questions[loop].options[1]);
    newPera.appendChild(radio_2);
    var radio_2Text = document.createTextNode(questions[loop].options[1]);
    newPera.appendChild(radio_2Text);

    var br = document.createElement("br");
    newPera.appendChild(br);
    var radio_3 = document.createElement("input");
    radio_3.setAttribute("id","radio_3Id");
    radio_3.setAttribute("type","radio");
    radio_3.setAttribute("name","radio");
    radio_3.setAttribute("value",questions[loop].options[2]);
    newPera.appendChild(radio_3);
    var radio_3Text = document.createTextNode(questions[loop].options[2]);
    newPera.appendChild(radio_3Text);

    var br = document.createElement("br");
    newPera.appendChild(br);
    var radio_4 = document.createElement("input");
    radio_4.setAttribute("id","radio_4Id");
    radio_4.setAttribute("type","radio");
    radio_4.setAttribute("name","radio");
    radio_4.setAttribute("value",questions[loop].options[3]);
    newPera.appendChild(radio_4);
    var radio_4Text = document.createTextNode(questions[loop].options[3]);
    newPera.appendChild(radio_4Text);
    
}
function startTime()
{
    var min = 2 , sec = 60;
    var time = document.createElement("p");
    var timeNode = document.createTextNode(min+":"+sec);
    time.appendChild(timeNode);
    var body = document.getElementsByTagName("body")[0];
    body.appendChild(time);
}
