 function processString()
    {
        document.getElementById("txtArea").value = "";

        var inputString = document.getElementById('txtBox').value;

        var result = inputString.match(/\d+/g);

        

        if (result != null) 
            {
                for(var i=0; i<result.length;i++)
                {
                    document.getElementById("txtArea").value += result[i]+"\r\n";
                }
            }
    }/*
    https://www.youtube.com/watch?v=aoCbTuFlWKEsa*/