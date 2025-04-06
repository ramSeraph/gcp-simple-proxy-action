#!/bin/bash


zone="$1"
project="$2"
instance_name="$3"
fw_rule_name="$4"

gcloud compute instances stop $instance_name \
    --project=$project \
    --zone=$zone

gcloud -q compute instances delete $instance_name \
    --project=$project \
    --zone=$zone \
    --delete-disks=all

gcloud -q compute firewall-rules delete $fw_rule_name \
    --project=$project

