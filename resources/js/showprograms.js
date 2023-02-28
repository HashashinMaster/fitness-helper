import $ from "jquery";

function popUp(path){

    return `<div id="popup">
    <form method="post" action="${path}">
    <input type="hidden" name="_method" value="PUT">
    <label> Give your program a name:
    <input id="change-name" name="programName" type="text" placeholder = "Type here..."/>
    <input type="button" id="save" value="Save" />
    <button type="button" id='cancel'> Cancel</button>
    <input type="hidden" name="_token" value="${$('meta[name="csrf-token"]').attr('content')}" />
    </form>
    </div>`;
}


$(()=>{
$('[data-url]').on('click', function(){
    $('body').append(popUp($(this).attr('data-url')));
    $('#save').on('click', function () {
        if($('#change-name').val().length < 4){
            $('#change-name').attr('aria-invalid',true)
            return
        }
        $('form').trigger('submit');
    })
    $('#change-name').on('input', function () {
        if($(this).attr('aria-invalid') === 'true')
            $(this).attr('aria-invalid','')
    })
    $('#cancel').on('click', function(){
        $(this).parent().parent().parent().remove();
    })
})
});