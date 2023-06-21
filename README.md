
# fitness-helper
If You are beginner of the fitness world, plus you want to train at home and have obstructions like counting how much sets left, forgetting how much reps you need, have 10 windows opened to see how to do your exercise correctly, then this app is for you.

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
        - Form inputs changes based on the number of exercises,weeks you choosed and if you choosed to train that day or not.
    3. Dynamic Validation:
        - All the inputs generated get validated before moving to next ation.
    
1. View programs features:
    1. Update programs:
        - you can either view,edit the name of the program, or delete it.
    2. Training Days:
        - If you click on view, you can see all days you choosed to train on it, the number of exercises you have for each one, and train action button to start                training.
    3. Training:
        - In top you have a nav with days of the week, the days you choose to train are highlighted with orange and the day u clicked on is highlighted as well                  with a fire icon.
        - When you click on train action button to start training you redirect to another page. in this page on the left:
            - you can see the video of one exercise you uploaded looping
            - how much sets you have
            - exercise name
            - muscle name
            - repititions
            - weight
            - on hover how much sets left
            - on hover you can play and pause the video
            - input to store the rest time cookie for every sets in seconds with validation
        - On the right side of the page you have all exercises you have in that day with the ability to select an exercise.
        - Counting sets for you. And when you are done it moves automaticly to the next exercise.
        
# Screenshots
  ![image](https://user-images.githubusercontent.com/97839369/224556878-eae741fc-f3ba-45c5-98eb-fd7c34dc5433.png)
  ![image](https://user-images.githubusercontent.com/97839369/224556924-54226972-9768-460d-9745-9c3369126d3d.png)
  ![image](https://user-images.githubusercontent.com/97839369/224556969-4c1f8db7-af54-4e52-b5c1-bc3055e7b480.png)
  ![image](https://user-images.githubusercontent.com/97839369/224557240-da1cafb1-1c78-494d-b531-5f54dcc5c9aa.png)
  ![image](https://user-images.githubusercontent.com/97839369/224557255-1c434e8c-99e7-420f-a1f9-1157637d7ebe.png)
  ![image](https://user-images.githubusercontent.com/97839369/224557339-86cbe091-c8d8-4d9f-b080-826e0394a01e.png)
  ![image](https://user-images.githubusercontent.com/97839369/224557480-dd7a819c-9357-45cd-8e6b-99034851398e.png)
  ![image](https://user-images.githubusercontent.com/97839369/224557519-7b9f0ce3-c39f-4e85-b7f3-bcfd30ec6e40.png)
  ![image](https://user-images.githubusercontent.com/97839369/224557548-22c673ce-35fc-4283-9dcb-6b2fc1de348f.png)
  ![image](https://user-images.githubusercontent.com/97839369/224557582-7a4d6c33-6a71-4b9d-9fff-11964387bcca.png)
  ![image](https://user-images.githubusercontent.com/97839369/224557786-4b897931-22d8-40c7-abab-a752967d6c04.png)
  ![image](https://user-images.githubusercontent.com/97839369/224557611-1d095e7a-1fb8-435f-a40d-f0cb31ae1c02.png)
  ![image](https://user-images.githubusercontent.com/97839369/224557886-04e7b44c-ad4a-49c9-a58c-47b9ae7aa46d.png)
  ![image](https://user-images.githubusercontent.com/97839369/224557911-097031ac-e84c-4e4f-ad9d-8a6afdd8bec7.png)
  ![image](https://user-images.githubusercontent.com/97839369/224557950-da58c0f6-f23d-4bea-9a3a-e88e43939b7a.png)


# video demo
<a href="https://www.linkedin.com/posts/el-mahdi-bouzkoura_i-apologies-for-the-lag-only-god-knows-how-activity-7041563808401641472-9Cz4?utm_source=share&utm_medium=member_desktop">
<img src="https://media.licdn.com/dms/image/D4E05AQGrAr75ddiK_Q/videocover-low/0/1678839594023?e=1687968000&v=beta&t=cBFrXXvn2qr3JptlFS6Tk4rpIaHXcLlbj6BxRtZ-9Vg" />
</a>









