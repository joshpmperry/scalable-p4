for i in {1..10}
do
    curl -X POST \
    http://localhost:8080/api/token/buy \
    -H 'Content-Type: application/json' \
    -d '{
        "payment_status": "INSUFFICIENT_FUND",
        "userID": "user'$i'",
        "amount": 10,
        "OrderID": "order'$i'"
        "DateCreated" : "'"$(date -u +"%Y-%m-%dT%H:%M:%SZ")"'"
    }'
    echo 
done


