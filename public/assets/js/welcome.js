$(document).ready(function(){
    function toObj(data){
        var iniObj="";
        for(var i=0; i<data.length; i++){
            var last=data.length-1;
            iniObj=iniObj+'"'+data[i].name+'":"'+data[i].value+'"';
            if(i!=last){
                iniObj=iniObj+",";
            }
        }
        iniObj="{"+iniObj+"}";
        return JSON.parse(iniObj);
    }
    $("#save-post").on('submit', function(e){
        let element=$(this);
        e.preventDefault();        
        $.ajax({
            url: $(this).attr('action'),
            type: 'POST',
            data: toObj($(this).serializeArray()),
            success: function(data){
                element[0].reset();
                location.reload();
            }
        });
    });
    $(".update-post").on('submit', function(e){
        let element=$(this);
        e.preventDefault();        
        $.ajax({
            url: $(this).attr('action'),
            type: 'PUT',
            data: toObj($(this).serializeArray()),
            success: function(data){
                location.reload();
            }
        });
    });
    $(".delete-post").on('click', function(e){
        $(this).attr('disabled','');    
        $.ajax({
            url: '/delete/'+$(this).data('id'),
            type: 'DELETE',
            success: function(data){
                location.reload();
            }
        });
    });
});