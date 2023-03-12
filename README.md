# fitness-helper
If You are beginner of the fitness world, plus you want to train at home and have obstructions like counting how much sets left, forgetting how much reps u need, have 10 windows opened to see how do your exercise correctly, then this app is for you.

# Requirement
- PHP >= 8.0.2.
- node.js >= v14.18.1
- mysql
- In your "php.ini" file, search for the file_uploads directive, and set it to On.
- In your "php.ini" file, search for the upload_max_filesize directive, and set it to 1024M.

# Setting up the project
1. Runing migrations:
    - go to the directory where it's located and run `` php artisan migrate ``.
2. Seeding Quotes:
    - go to the directory where it's located and run `` php artisan db:seed --class=QuoteSeeder ``.
3. Adding environment file:
    - go to the directory where it's located and create **.env** file. check **.env.example** file on the repo for more infos.
 4. installing laravel-mix:
    - go to the directory where it's located and run ```npm i``` to install all dependencies including laravel mix.
    - when dowload completed  go to the directory where it's located and run ``npx mix watch``
5. Starting the server:
    - to start the server go to the directory where it's located and run ``` php artisan serve ```.
    
Now you can use the app or modify it however you like.
# Features
1. Add progams features:

    1. Random Quotes:
        - every time you enter the home page u get a random quote from database
    2. Dynamic form:
        - Form inputs change based on number of exercises,weeks you choosed and if you choosed to train that day or not.
    3. Dynamic Validation:
        - All the inputs generated get validated before moving to next ation.
    
1. View programs features:
    1. Update programs:
        - you can either view,edit the name of the program, or delete it.
    2. Training Days:
        - If you click on view, you can see all days you choosed to train on it, the number of exercises you have for each one, and train action button to start                training.
    3. Training:
        - When you click on train action button to start training you redirect to another page. in this page on the left:
            - you can see the video you uploaded looping
            - how much sets you have
            - exercise name
            - muscle name
            - repititions
            - weight
            - on hover how much sets left
            - on hover you can play and pause the video
            - input to store the rest time cookie for every sets in seconds with validation
        
  
