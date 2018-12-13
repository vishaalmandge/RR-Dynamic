    var count = 3;
    $(document).on('click', '#addpv1', function () {
        var appendTxt = "<div class='form-group'><input type='text' class='form-control m-b-10' placeholder='Parameter Value' name='para_ans1[]' id='para_ans" + count + "'><small class='form-text'><a href='javascript:void(0);'id='removemanager'>Remove</a></small></div>"
        $("#addpvdynamic").append(appendTxt);
        //$("." + $(this).attr("class")).append(appendTxt);
        count++;
        console.log(count)
    });

    $(document).on('click', 'removemanager', function (e) {
        //$(this).closest("div").remove();
        $("#" + $(this).attr("id")).parent().remove();
    });
    //-------------------------------
    var count = 3;
    $(document).on('click', '#addprv1', function () {
        var appendTxt = "<div class='form-group'><input type='text' class='form-control m-b-10' placeholder='Parameter Value' name='para_ans1[]' id='para_ans" + count + "'><small class='form-text'><a href='javascript:void(0);'id='removemanager'>Remove</a></small></div>"
        $("#addprvdynamic").append(appendTxt);
        count++;
        console.log(count)
    });

    $(document).on('click', '#removemanager', function (e) {
        $(this).closest("div").remove();
    });
    var count = 3;
    $(document).on('click', '#addprmv1', function () {
        var appendTxt = "<div class='form-group'><input type='text' class='form-control m-b-10' placeholder='Parameter Value' name='para_ans1[]' id='para_ans" + count + "'><small class='form-text'><a href='javascript:void(0);'id='removemanager'>Remove</a></small></div>"
        $("#addprmvdynamic").append(appendTxt);
        count++;
        console.log(count)
    });

    $(document).on('click', '#removemanager', function (e) {
        $(this).closest("div").remove();
    });


    $(document).ready(function () {
        var max_fields = 30; //maximum input boxes allowed
        var wrapper = $("#dynamic"); //Fields wrapper
        var add_button = $("#addparas1"); //Add button ID
        var x = 1;
        var pq = 3;
        var pa = 3;
        var pp = 3;
        var pt = 3;
        var pv = 3;
        var pvr = 3;
        var pvm = 3;
        var dpv = 3;
        $(add_button).click(function (e) { //on add input button click

            e.preventDefault();
            if (x < max_fields) { //max input box allowed
                x++; //text box increment
                pq++;
                pa++;
                pp++;
                pv++;
                pvr++;
                pvm++;
                dpv++;
                var $newSelects = $('<div class="row"><div class="col-md-4"> <div class="form-group"> <textarea type="text" name="parameter[]" parsley-trigger="change" required placeholder="Parameter" class="form-control m-b-10" id="pn1" rows="2"></textarea> <input type="text" class="form-control m-b-10" required placeholder="Parameter Value" name="para_ans1[]" id="pv1"> <input type="text" class="form-control m-b-10" placeholder="Parameter Value" name="para_ans1[]" id="pv2"> <input type="text" class="form-control m-b-10" placeholder="Parameter Value" name="para_ans1[]" id="pv3"> <a href="javascript:void(0);" id="addpv1' + pq + '" class="addpv1"><small>Add parameter values</small></a> <div id="addpvdynamic' + pv + '" class="addpvdynamic"> </div></div></div><div class="col-md-4"> <div class="form-group"> <textarea type="text" name="parameter[]" parsley-trigger="change" required placeholder="Parameter" class="form-control m-b-10" id="pn2" rows="2"></textarea> <input type="text" class="form-control m-b-10" required placeholder="Parameter Value" name="para_ans5[]" id="prv1"> <input type="text" class="form-control m-b-10" placeholder="Parameter Value" name="para_ans5[]" id="prv2"> <input type="text" class="form-control m-b-10" placeholder="Parameter Value" name="para_ans5[]" id="prv3"> <a href="javascript:void(0);" id="addprv1' + pa + '" class="addprv1"><small>Add parameter values</small></a> <div id="addprvdynamic ' + pvr + '" class="addprvdynamic"> </div></div></div><div class="col-md-4"> <div class="form-group"> <textarea type="text" name="parameter[]" parsley-trigger="change" required placeholder="Parameter" class="form-control m-b-10" id="pn3" rows="2"></textarea> <input type="text" class="form-control m-b-10" required placeholder="Parameter Value" name="para_ans9[]" id="prmv1"> <input type="text" class="form-control m-b-10" placeholder="Parameter Value" name="para_ans9[]" id="prmv2"> <input type="text" class="form-control m-b-10" placeholder="Parameter Value" name="para_ans9[]" id="prmv3"> <a href="javascript:void(0);" id="addprmv1' + pp + '" class="addprmv1"><small>Add parameter values</small></a> <div id="addprmvdynamic' + pvm + '" class="addprmvdynamic"> </div></div></div><a href="javascript:void(0);" id="remove-pararow">Remove</a></div>')
                wrapper.append($newSelects);

                console.log(pq);
                console.log(pa);
                console.log(pp);
            }

        });
        $(wrapper).on("click", "#remove-pararow", function (e) { //user click on remove text
            e.preventDefault();
            addprmvdynamic
            $(this).parent('div').remove();

        })
    });
