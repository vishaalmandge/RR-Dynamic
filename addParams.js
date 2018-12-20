        var addMRow =    '   <div class="row">                          '  + 
 '                           <div class="col-md-4">  '  + 
 '                               <div class="form-group">  '  + 
 '                                   <textarea type="text" name="parameter[]" parsley-trigger="change" required placeholder="Parameter" class="form-control m-b-10" id="pn1" rows="2"></textarea>  '  + 
 '                                   <input type="text" class="form-control m-b-10" required placeholder="Parameter Value" name="para_ans1[]" id="pv1">  '  + 
 '                                   <input type="text" class="form-control m-b-10" placeholder="Parameter Value" name="para_ans1[]" id="pv2">  '  + 
 '                                   <input type="text" class="form-control m-b-10" placeholder="Parameter Value" name="para_ans1[]" id="pv3">  '  + 
 '                                   <a href="javascript:void(0);" id="addpv1" class="addpv1"><small>Add parameter values</small></a>  '  + 
 '                                   <div id="addpvdynamic" class="addpvdynamic">  '  + 
 '     '  + 
 '                                   </div>  '  + 
 '                               </div>  '  + 
 '     '  + 
 '                           </div>  '  + 
 '                           <div class="col-md-4">  '  + 
 '                               <div class="form-group">  '  + 
 '                                   <textarea type="text" name="parameter[]" parsley-trigger="change" required placeholder="Parameter" class="form-control m-b-10" id="pn2" rows="2"></textarea>  '  + 
 '                                   <input type="text" class="form-control m-b-10" required placeholder="Parameter Value" name="para_ans5[]" id="prv1">  '  + 
 '                                   <input type="text" class="form-control m-b-10" placeholder="Parameter Value" name="para_ans5[]" id="prv2">  '  + 
 '                                   <input type="text" class="form-control m-b-10" placeholder="Parameter Value" name="para_ans5[]" id="prv3">  '  + 
 '                                   <a href="javascript:void(0);" id="addprv1" class="addpv1"><small>Add parameter values</small></a>  '  + 
 '                                   <div id="addprvdynamic" class="addprvdynamic">  '  + 
 '     '  + 
 '                                   </div>  '  + 
 '                               </div>  '  + 
 '                           </div>  '  + 
 '                           <div class="col-md-4">  '  + 
 '                               <div class="form-group">  '  + 
 '                                   <textarea type="text" name="parameter[]" parsley-trigger="change" required placeholder="Parameter" class="form-control m-b-10" id="pn3" rows="2"></textarea>  '  + 
 '                                   <input type="text" class="form-control m-b-10" required placeholder="Parameter Value" name="para_ans9[]" id="prmv1">  '  + 
 '                                   <input type="text" class="form-control m-b-10" placeholder="Parameter Value" name="para_ans9[]" id="prmv2">  '  + 
 '                                   <input type="text" class="form-control m-b-10" placeholder="Parameter Value" name="para_ans9[]" id="prmv3">  '  + 
 '                                   <a href="javascript:void(0);" id="addprmv1" class="addpv1"><small>Add parameter values</small></a>  '  + 
 '                                   <div id="addprmvdynamic" class="addprmvdynamic">  '  + 
 '     '  + 
 '                                   </div>  '  + 
 '                               </div>  '  + 
 '     '  + 
 '                           </div>  '  + 
 '                           <div class="col-md-12">  '  + 
 '                            <a href="javascript:void(0);" class="removeRow">Remove</a>  '  + 
 '                           </div>  '  + 
 '                      </div>  ' ; 




$(document).on("click", ".addpv1", function () {
    //alert('you clicked me!');
    $(this).after("<div><input type='text' class='form-control m-b-10' placeholder='Parameter Value' name='para_ans5[]' id='prv3'><a href='javascript:void(0);' class='removeParav'>Remove</a></div>");
});

$('.addRow').click(function () {
    $(this).after(addMRow);
});

/*
$('.removeRow').click(function () {
    alert('Test');
    $(this).closest("div.row").remove();
});
*/

 $(document).on("click", ".removeRow", function() {
            
             $(this).closest("div.row").remove();
        });
$(document).on("click", ".removeParav", function() {
            
             $(this).closest("div").remove();
        });