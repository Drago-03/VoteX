#!/bin/bash

# Create the gallery directory if it doesn't exist
mkdir -p public/assets/images/gallery

# Download and optimize images from ECI website
# Note: These URLs should be replaced with actual ECI image URLs
declare -a images=(
    "eci-headquarters.jpg:https://eci.gov.in/uploads/monthly_2024_01/nirvachan-sadan.jpg"
    "evm-demonstration.jpg:https://eci.gov.in/uploads/monthly_2024_01/evm-demo.jpg"
    "national-voters-day.jpg:https://eci.gov.in/uploads/monthly_2024_01/nvd.jpg"
    "voter-registration.jpg:https://eci.gov.in/uploads/monthly_2024_01/registration.jpg"
    "election-officials.jpg:https://eci.gov.in/uploads/monthly_2024_01/training.jpg"
    "accessible-voting.jpg:https://eci.gov.in/uploads/monthly_2024_01/pwd.jpg"
    "vote-counting.jpg:https://eci.gov.in/uploads/monthly_2024_01/counting.jpg"
    "awareness-campaign.jpg:https://eci.gov.in/uploads/monthly_2024_01/sveep.jpg"
)

for image in "${images[@]}"; do
    IFS=':' read -r filename url <<< "$image"
    echo "Downloading $filename..."
    curl -L "$url" -o "public/assets/images/gallery/$filename"
done

echo "All images downloaded successfully!" 