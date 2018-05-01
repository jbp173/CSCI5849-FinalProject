'''
##################
Libararies used: OpenCV (Specfifically the ArUco library)
    ArUco documentation can be found at: https://docs.opencv.org/3.1.0/d9/d6d/tutorial_table_of_content_aruco.html

Code adapted from snipits found at: http://www.philipzucker.com/aruco-in-opencv/

@author: Jordan Peters
##################
'''
import cv2
import cv2.aruco as aruco

while (True):
    #Read input from same directory as this file
    image = cv2.imread('./Uploads/camelot-image.png')

    # Operations on the image
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

    #AruCo dictionary/parameters is static, we just need to declare it to access it
    aruco_dict = aruco.Dictionary_get(aruco.DICT_6X6_250)
    parameters =  aruco.DetectorParameters_create()

    #Lists of ids and the corners beloning to each id, we're only using the ids
    corners, ids, rejectedImgPoints = aruco.detectMarkers(gray, aruco_dict, parameters=parameters)

    #Generate output and write to file    
    output = ""    
    total = 0

    if ids is None:
        total = 9
    else:
        for i in range(1,9):
            if [i] not in ids:
                output += str(i-5) + ", " #-5 is used because ids start at 1, but our Excalibur positions start at -4
                total += 1

    if total == 0:
        output = "All markers found, Excalibur is not placed correctly."
    elif total == 9:
        output = "No markers found, please retake picture."
    elif total >= 4:
        output = "Please retake picture, photo is not centered."
    elif total == 1:
        output = "Excalibur is in position " + output[:len(output)-1]
    else:
        if output[len(output)-4] == "-":
            output = "Excalibur is one of positions " + output[:len(output)-4] + "or " + output[len(output)-4:len(output)-2]
        else:
            output = "Excalibur is one of positions " + output[:len(output)-3] + "or " + output[len(output)-3]

    #print(output)

    f = open("myFile.txt", "w")
    f.write(output)
f.close()