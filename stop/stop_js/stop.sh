#!/bin/bash


zone="$1"
project="$2"
instance_name="$3"

gcloud compute instances stop $instance_name \
    --project=$project \
    --zone=$zone

gcloud -q compute instances delete $instance_name \
    --project=$project \
    --zone=$zone \
    --delete-disks=all

