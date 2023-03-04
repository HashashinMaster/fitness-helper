import $ from 'jquery';
import axios from 'axios';
import { isArray, reject } from 'lodash';

let data = {};
let pageIndex = 1;
let maxPages = 1;


$(() => {
    $('#go-next')
        .on('click', async function () {
            
            if (pageIndex === 1){
                weeks(this);
                return;
            }

            if (pageIndex <= maxPages){
                if(validateAndCollectInfo()){
                    goNext(this)
                }
                
            }
            else if(validateAndCollectInfo()){
                await uploadVideos();
                await uploadData();
            }
        })
    


})


function weeks (el) {
    if((parseInt($('input').val()) < 1) || !$('input').val()){
        $('input').attr('aria-invalid',true)
        $('.inputs-container small')
            .text('invalid weeks number')
                .css('color','#f60103')
        return
    }
    $('input').attr('aria-invalid',false)
    data.weeks = $('input').val();
    maxPages = maxPages * data.weeks;
    for( let i = 1 ; i <= maxPages; i++)
        data["week" + i] = {};
    goNext(el);
    
} 






function formHTML (index){
    
    return `
    <div class="inputs-container next" style="animation: enter 0.5s ease-out">
<h1> week ${index -1}</h1>
    <details open>
        <summary>Monday</summary>
        <div class=" days-input-container">
        <div class="grid">
            <label>
                Number of exercises   <mark>(Enter 0 to choose Rest for this day) </mark>
                <input type="number" placeholder="number of Exercise u wish to train this day" >
            </label>
            <button class="confirm-exercises">enter</button>
            </div>
            <div class="exercises-inputs-container"></div>
        </div>
    </details>

    <details>
    <summary>Tuesday</summary>
    <div class=" days-input-container">
    <div class="grid">
        <label>
            Number of exercises   <mark>(Enter 0 to choose Rest for this day) </mark>
            <input type="number" placeholder="number of Exercise u wish to train this day" >
        </label>
        <button class="confirm-exercises">enter</button>
        </div>
        <div class="exercises-inputs-container"></div>
    </div>
    </details>

    <details>
    <summary>Wednesday</summary>
    <div class=" days-input-container">
    <div class="grid">
        <label>
            Number of exercises   <mark>(Enter 0 to choose Rest for this day) </mark>
            <input type="number" placeholder="number of Exercise u wish to train this day" >
        </label>
        <button class="confirm-exercises">enter</button>
        </div>
        <div class="exercises-inputs-container"></div>
    </div>
    </details>
    
    <details>
    <summary>Thursday</summary>
    <div class=" days-input-container">
    <div class="grid">
    <label>
    Number of exercises   <mark>(Enter 0 to choose Rest for this day) </mark>
    <input type="number" placeholder="number of Exercise u wish to train this day" >
    </label>
    <button class="confirm-exercises">enter</button>
        </div>
        <div class="exercises-inputs-container"></div>
    </div>
    </details>
    
    
    <details>
    <summary>Friday</summary>
    <div class=" days-input-container">
    <div class="grid">
        <label>
            Number of exercises   <mark>(Enter 0 to choose Rest for this day) </mark>
            <input type="number" placeholder="number of Exercise u wish to train this day" >
            </label>
            <button class="confirm-exercises">enter</button>
            </div>
            <div class="exercises-inputs-container"></div>
            </div>
            </details>
            
            <details>
            <summary>Saturday</summary>
            <div class=" days-input-container">
            <div class="grid">
            <label>
            Number of exercises   <mark>(Enter 0 to choose Rest for this day) </mark>
            <input type="number" placeholder="number of Exercise u wish to train this day" >
            </label>
            <button class="confirm-exercises">enter</button>
            </div>
            <div class="exercises-inputs-container"></div>
            </div>
    </details>
    
    <details>
    <summary>Sunday</summary>
    <div class=" days-input-container">
    <div class="grid">
        <label>
            Number of exercises   <mark>(Enter 0 to choose Rest for this day) </mark>
            <input type="number" placeholder="number of Exercise u wish to train this day" >
            </label>
            <button class="confirm-exercises">enter</button>
            </div>
            <div class="exercises-inputs-container"></div>
            </div>
            </details>
</div>
`
}
function goNext(el) {

    $(el)
    .parent()
        .children('.inputs-container')
            .on('animationend',function () {
                $('#form-container')
                    .css('width','49rem');
                $(this)
                    .parent()
                        .prepend(formHTML(pageIndex))

                $('.confirm-exercises')
                    .each( function () {
                        $(this)
                            .on('click',generateExerciseInputs)
                        $(this)
                            .parent()
                                .find('input')
                                    .on('input', function() {
                                        $(this).removeAttr('aria-invalid');
                                    })

                    })

                $(this).remove()
            })
            .css('animation','leave 0.5s ease-out')
    pageIndex++;
    
}

function generateExerciseInputs() {
    
    const input = $(this).parent().find('input');   
    input.attr('aria-invalid',false);
    if(!(parseInt(input.val()) >=  0) || !input.val()){
        input.attr('aria-invalid',true)
        $(this).parent().parent().find('.exercises-inputs-container').html('');
        input.removeClass('added-inputs')           
        return
    }
    input.addClass('added-inputs')       
    $(this).parent().parent().find('.exercises-inputs-container').html('');
    if((parseInt(input.val()) >  0)) {
        for ( let i = 0; i < parseInt(input.val()); i++){
            $(this).parent().parent().find('.exercises-inputs-container')
                .append(`
                <div class="grid">
                        <select style="width:42%; margin:0;">
                        <option value="Hamstrings">Hamstrings</option>
                        <option value="Calves" >Calves</option>
                        <option value="Chest">Chest</option>
                        <option value="Back">Back</option>
                        <option value="Shoulders">Shoulders</option>
                        <option value="Triceps">Triceps</option>
                        <option value="Biceps">Biceps</option>
                        <option value="Forearms">Forearms</option>
                        <option value="Abs">Abs</option>
                        <option value="Trapezius">Trapezius</option>
                        <option value="Legs">Legs</option>
                        <option value="Quadriceps">Quadriceps</option>
                        <option value="Glutes">Glutes</option>
                        </select>
                    
                    <label>Exercsise Name
                        <input type="text" data-type="text" placeholder="Arnold curls..." />
                    </label>
                    <label>Exercsise Sets
                        <input type="numbers" data-type="number" placeholder="3..." />
                    </label>
                    <label> Repitions
                        <input type="numbers" data-type="number" placeholder="12..." />
                    </label>
                    <label> weight/kgs
                        <input type="numbers" data-type="number" placeholder="20..." />
                    </label>
                    <label> upload a video
                        <input data-type="file" type="file" accept="video/*"/>
                    </label>
                </div>
                `)
        }
    }
    else {
        $(this).parent().parent().find('.exercises-inputs-container')
                .append(`
                <div class ="grid forRest"><label><input data-type="hidden" type="hidden" value="Rest"></label></div>
                <div class="rest">
                    <kbd>
                        <strong>Rest: </strong>
                        <s> No Training for Today </s>
                    </kbd>
                </div>
                `);
    }
    $(this).parent().parent().find('.exercises-inputs-container .grid label input').each( function () {
        $(this).on('input', function(){
            $(this).removeAttr('aria-invalid');
        })
    });
}
function validateAndCollectInfo() {
    let allGood = true;
    const exInputs = $('details .days-input-container > .grid > label input').toArray();
    for( let i=0 ; i<exInputs.length;i++){
        if( !(parseInt($(exInputs[i]).val()) >=  0) || !$(exInputs[i]).val() || !$(exInputs[i]).hasClass('added-inputs')){
                allGood = false;
                $(exInputs[i]).attr('aria-invalid',true);
            }
        //validate inputs
        const inputsArr = $(exInputs[i]).parent().parent().parent().children('.exercises-inputs-container').find('.grid').find('label input');
            inputsArr.each( function () {
                switch (true){
                    case ( $(this).attr("data-type") === "text" && $(this).val().length < 1):
                        $(this).attr('aria-invalid',true);
                        allGood = false;         
                        break;

                    case ( $(this).attr("data-type") === "number" && (parseInt($(this).val()) <= 0 || isNaN($(this).val()) || !$(this).val() )): 
                            $(this).attr('aria-invalid',true);
                            allGood = false;         
                            break;
                        
                    case ( $(this).attr("data-type") === "file" && $(this).prop('files').length < 1):
                        $(this).attr('aria-invalid',true);
                        allGood = false;   
                        break;

                    case ( $(this).attr("data-type") === "hidden" && $(this).val().length < 1):
                        $(this).attr('aria-invalid',true);
                        allGood = false;   
                        break;
                    
                    default:
                        $(this).attr('aria-invalid',false);
                    
                }   
            });
    } 
    if(!allGood) return
    $('details .days-input-container > .grid > label input').each( function() {
            $(this).attr('aria-invalid',false);
            const inputs = $(this).parent().parent().parent().children('.exercises-inputs-container').find('.grid').find('label input');
                    if(inputs.length > 1){

                        data['week' + (pageIndex-1)][$(this).parent().parent().parent().parent().find('summary').text()] = [];
                        for( let i = 1; i <= inputs.length/5;i++){
                            data['week' + (pageIndex-1)][$(this).parent().parent().parent().parent().find('summary').text()].push({});
                            data['week' + (pageIndex-1)][$(this).parent().parent().parent().parent().find('summary').text()][i-1].muscle = $(this).parent().parent().parent().find('.exercises-inputs-container').find('.grid').find('select').toArray()[i-1].value;
                            for(let j = 4 * (i-1); j<5 *i; j++){
                                if(inputs.toArray()[j].type === "file")
                                    data['week' + (pageIndex-1)][$(this).parent().parent().parent().parent().find('summary').text()][i-1]["video"] = inputs.toArray()[j].files[0];
            
                                else
                                    data['week' + (pageIndex-1)][$(this).parent().parent().parent().parent().find('summary').text()][i-1][$(inputs.toArray()[j]).parent().text().replace(/\s/g, '' )] = inputs.toArray()[j].value;

                            }
                        }
                    }
                    else if(inputs.val() === "Rest"){
                        data['week' + (pageIndex-1)][$(this).parent().parent().parent().parent().find('summary').text()] = 'Rest';
                }
            
    })
    return allGood;
}
async function uploadVideos () {
    $('body')
        .append(`
        <div id="upload-pop-up">
            <div id="upload-content-container">
            
            </div>
        </div>`);

    for( const week in data)
        for (const day in data[week]){
            if(isArray( data[week][day]))
                for( const exercise in data[week][day] ){
                    try {
                        $('#upload-content-container')
                        .append(` 
                        <div class="loading-container">
                            <div class="loading" aria-busy="true"></div>
                            <p>downloading the video pls wait...</p>
                            </div>
                        </div>`
                        )
                        const res = await axios.post('/api/upload',{ video: data[week][day][exercise].video },{
                            'headers': {
                                'Content-Type':'multipart/form-data'
                            }
                        })
                        if(res.data.success){
                            data[week][day][exercise].video = res.data.path;
                            const imageBlob = await getVideoFrameAndBlob(res.data.path);
                            const res2 = await axios.post('/api/upload',{ image: imageBlob },{
                                'headers': {
                                    'Content-Type':'multipart/form-data'
                                }
                            })
                            if(res2.data.success){
                                data[week][day][exercise].thumbnail = res2.data.path;
                                const image = new Image();
                                image.src = res2.data.path;
                                image.className = "thumbs-upload";
                                $('#upload-content-container .loading-container').remove();
                                $('#upload-content-container').prepend(image);
                            }
                        }
                    } catch (error) {
                        console.log(err.message)
                    }
                
                }
        }
       
}

async function uploadData() {
    const res = await axios.post('/api/add', {data:JSON.stringify(data)});
        if(res.data.success)
            location.replace('/programs');
}
//getting video frame
function getVideoFrameAndBlob(url) {
    $('#upload-content-container')
    .append(`
    <video style="display:none;" src=${url}></video>`)
    
    return new Promise( (resolve, reject) => {
        $('video').on('canplay', async function(){
            const bitmap = await createImageBitmap($(this)[0], { 
              imageOrientation: 'none', 
              resizeWidth: $(this).prop('videoWidth'), 
              resizeHeight: $(this).prop('videoHeight')
            });
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            canvas.width =  $(this).prop('videoWidth');
            canvas.height = $(this).prop('videoHeight');
            ctx.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
            canvas.toBlob( (blob) => {
                resolve(blob)

            })
      
        });
    })
}
  