function SendReactMessage(action, data)
    SendNUIMessage({ action = action, data = data })
end
  
toggleNuiFrame = function (shouldShow)
    SetNuiFocus(shouldShow, shouldShow)
    SendReactMessage('setVisible', shouldShow)
    if shouldShow then
        StartScreenEffect("MenuMGSelectionIn", 0, true)
    else
        StopScreenEffect("MenuMGSelectionIn")
    end
end

RegisterNUICallback("hideFrame",function(data,cb)
    toggleNuiFrame(false)
    cb({})
end)