a={"a":12,'b':34,"y":45}
b={"a":23,"v":2}
for i in b:
    # print(b[i])
    if i in a:
        a[i]=a[i]+b[i]
    else:
        a[i]=b[i]
print(a)
