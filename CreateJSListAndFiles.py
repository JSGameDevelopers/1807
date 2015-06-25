def read_js_files(filename):
    if filename!='jquery-1.11.1.min.js':
        print('%s\n'%filename)
        file_ptr = open('js/'+filename,'r')
        for line in file_ptr:
            temp = line.find("function")
            #print('line = '+line+' temp = '+str(temp))
            if temp>=0:
                line = line[temp:]
                line = line[:-1]
                print('\t\t\t\t %s'%line)

def __main__():
    file_ptr = open("JSFileList.txt",'r')
    for file in file_ptr:
        file = file[:-1]
        print('<script src=\"js/%s\"></script>'%file)
        read_js_files(file)

__main__()
